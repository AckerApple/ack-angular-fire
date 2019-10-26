"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
function leftJoin(afs, field, collection, limit) {
    if (limit === void 0) { limit = 100; }
    return function (source) {
        return rxjs_1.defer(function () {
            // Operator state
            var collectionData;
            return source.pipe(operators_1.switchMap(function (data) {
                collectionData = data;
                var reads$ = [];
                var _loop_1 = function (doc) {
                    // Push doc read to Array
                    if (doc[field]) {
                        // Perform query on join key, with optional limit
                        var q = function (ref) { return ref.where(field, '==', doc[field]).limit(limit); };
                        reads$.push(afs.collection(collection, q).valueChanges());
                    }
                    else {
                        reads$.push(rxjs_1.of([]));
                    }
                };
                for (var _i = 0, collectionData_1 = collectionData; _i < collectionData_1.length; _i++) {
                    var doc = collectionData_1[_i];
                    _loop_1(doc);
                }
                return rxjs_1.combineLatest(reads$);
            }), operators_1.map(function (joins) {
                return collectionData.map(function (v, i) {
                    var _a;
                    return __assign({}, v, (_a = {}, _a[collection] = joins[i] || null, _a));
                });
            }));
        });
    };
}
exports.leftJoin = leftJoin;
;
exports.leftJoinDocument = function (afs, field, collection, asName) {
    return function (source) {
        return rxjs_1.defer(function () {
            // Operator state
            var collectionData;
            var cache = new Map();
            return source.pipe(operators_1.switchMap(function (data) {
                // Clear mapping on each emitted val ;
                cache.clear();
                // Save the parent data state
                collectionData = data;
                var reads$ = [];
                var i = 0;
                for (var _i = 0, collectionData_2 = collectionData; _i < collectionData_2.length; _i++) {
                    var doc = collectionData_2[_i];
                    // Skip if doc field does not exist or is already in cache
                    if (!doc[field] || cache.get(doc[field])) {
                        continue;
                    }
                    // Push doc read to Array
                    reads$.push(afs
                        .collection(collection)
                        .doc(doc[field])
                        .valueChanges());
                    cache.set(doc[field], i);
                    i++;
                }
                return reads$.length ? rxjs_1.combineLatest(reads$) : rxjs_1.of([]);
            }), operators_1.map(function (joins) {
                return collectionData.map(function (v, i) {
                    var _a;
                    var joinIdx = cache.get(v[field]);
                    return __assign({}, v, (_a = {}, _a[asName || field] = joins[joinIdx] || null, _a));
                });
            }));
        });
    };
};
exports.docJoin = function (afs, paths) {
    return function (source) {
        return rxjs_1.defer(function () {
            var parent;
            var keys = Object.keys(paths);
            return source.pipe(operators_1.switchMap(function (data) {
                // Save the parent data state
                parent = data;
                // Map each path to an Observable
                var docs$ = keys.map(function (k) {
                    var fullPath = paths[k] + "/" + parent[k];
                    return afs.doc(fullPath).valueChanges();
                });
                // return combineLatest, it waits for all reads to finish
                return rxjs_1.combineLatest(docs$);
            }), operators_1.map(function (arr) {
                // We now have all the associated douments
                // Reduce them to a single object based on the parent's keys
                var joins = keys.reduce(function (acc, cur, idx) {
                    var _a;
                    return __assign({}, acc, (_a = {}, _a[cur] = arr[idx], _a));
                }, {});
                // Return the parent doc with the joined objects
                return __assign({}, parent, joins);
            }));
        });
    };
};
//# sourceMappingURL=joins.js.map