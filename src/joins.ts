import {
  
  DocumentData, AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import {
  // OperatorFunction,
  combineLatest, Observable,
  //pipe,
  of, defer
} from 'rxjs';
import {
  map, switchMap
  //, tap
} from 'rxjs/operators';

export function leftJoin(
  afs: AngularFirestore,
  fieldFrom: string,
  fieldTo: string,
  collection: string,
  limit = 100
): (source: Observable<AngularFirestoreCollection[]>) => Observable<unknown> {
  return (source: Observable<AngularFirestoreCollection[]>) =>
    defer(() => {
      // Operator state
      let sourceCollection: AngularFirestoreCollection[];

      return source.pipe(
        switchMap((data: AngularFirestoreCollection[]) => {
          sourceCollection = data;

          const reads$ = [];
          for (const doc of sourceCollection) {
            if (doc[fieldFrom]) {
              // Perform query on join key, with optional limit
              const q = (ref: any) => ref.where(fieldTo, '==', doc[fieldFrom]).limit(limit);

              reads$.push(afs.collection(collection, q).valueChanges());
            } else {
              reads$.push(of([]));
            }
          }

          return combineLatest(reads$);
        }),
        map((joins: any[]) => {
          return sourceCollection.map((v, i) => {
            return { ...v, [collection]: joins[i] || null };
          });
        })
      );
    });
};

export function leftJoinDocument(
  afs: AngularFirestore,
  field:string,
  collection:string,
  asName?:string
): (source: Observable<AngularFirestoreCollection[]>) => Observable<unknown>{
  return (source: Observable<AngularFirestoreCollection[]>) =>
    defer(() => {
      // Operator state
      let collectionData: AngularFirestoreCollection[];
      const cache = new Map();

      return source.pipe(
        switchMap(data => {
          // Clear mapping on each emitted val ;
          cache.clear();

          // Save the parent data state
          collectionData = data as any[];

          const reads$ = [];
          let i = 0;
          for (const doc of collectionData) {
            // Skip if doc field does not exist or is already in cache
            if (!doc[field] || cache.get(doc[field])) {
              continue;
            }

            // Push doc read to Array
            reads$.push(
              afs
                .collection(collection)
                .doc(doc[field])
                .valueChanges()
            );
            cache.set(doc[field], i);
            i++;
          }

          return reads$.length ? combineLatest(reads$) : of([]);
        }),
        map(joins => {
          return collectionData.map((v, i) => {
            const joinIdx = cache.get(v[field]);
            return { ...v, [asName || field]: joins[joinIdx] || null };
          });
        })
      );
    });
};

export const docJoin = (
  afs: AngularFirestore,
  paths: { [key: string]: string }
) => {
  return (source: Observable<AngularFirestoreCollection[]>) =>
    defer(() => {
      let parent: AngularFirestoreCollection<DocumentData>[];
      const keys = Object.keys(paths);

      return source.pipe(
        switchMap(data => {
          // Save the parent data state
          parent = data;

          // Map each path to an Observable
          const docs$ = keys.map(k => {
            const fullPath = `${paths[k]}/${parent[k]}`;
            return afs.doc(fullPath).valueChanges();
          });

          // return combineLatest, it waits for all reads to finish
          return combineLatest(docs$);
        }),
        map(arr => {
          // We now have all the associated douments
          // Reduce them to a single object based on the parent's keys
          const joins = keys.reduce((acc, cur, idx) => {
            return { ...acc, [cur]: arr[idx] };
          }, {});

          // Return the parent doc with the joined objects
          return { ...parent, ...joins };
        })
      );
    });
};