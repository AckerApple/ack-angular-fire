import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
export declare function leftJoin(afs: AngularFirestore, fieldFrom: string, fieldTo: string, collection: string, limit?: number): (source: Observable<AngularFirestoreCollection[]>) => Observable<unknown>;
export declare function leftJoinDocument(afs: AngularFirestore, field: string, collection: string, asName?: string): (source: Observable<AngularFirestoreCollection[]>) => Observable<unknown>;
export declare const docJoin: (afs: AngularFirestore, paths: {
    [key: string]: string;
}) => (source: Observable<AngularFirestoreCollection<import("firebase").firestore.DocumentData>[]>) => Observable<{
    length: number;
    toString(): string;
    toLocaleString(): string;
    pop(): AngularFirestoreCollection<import("firebase").firestore.DocumentData> | undefined;
    push(...items: AngularFirestoreCollection<import("firebase").firestore.DocumentData>[]): number;
    concat(...items: ConcatArray<AngularFirestoreCollection<import("firebase").firestore.DocumentData>>[]): AngularFirestoreCollection<import("firebase").firestore.DocumentData>[];
    concat(...items: (AngularFirestoreCollection<import("firebase").firestore.DocumentData> | ConcatArray<AngularFirestoreCollection<import("firebase").firestore.DocumentData>>)[]): AngularFirestoreCollection<import("firebase").firestore.DocumentData>[];
    join(separator?: string | undefined): string;
    reverse(): AngularFirestoreCollection<import("firebase").firestore.DocumentData>[];
    shift(): AngularFirestoreCollection<import("firebase").firestore.DocumentData> | undefined;
    slice(start?: number | undefined, end?: number | undefined): AngularFirestoreCollection<import("firebase").firestore.DocumentData>[];
    sort(compareFn?: ((a: AngularFirestoreCollection<import("firebase").firestore.DocumentData>, b: AngularFirestoreCollection<import("firebase").firestore.DocumentData>) => number) | undefined): AngularFirestoreCollection<import("firebase").firestore.DocumentData>[];
    splice(start: number, deleteCount?: number | undefined): AngularFirestoreCollection<import("firebase").firestore.DocumentData>[];
    splice(start: number, deleteCount: number, ...items: AngularFirestoreCollection<import("firebase").firestore.DocumentData>[]): AngularFirestoreCollection<import("firebase").firestore.DocumentData>[];
    unshift(...items: AngularFirestoreCollection<import("firebase").firestore.DocumentData>[]): number;
    indexOf(searchElement: AngularFirestoreCollection<import("firebase").firestore.DocumentData>, fromIndex?: number | undefined): number;
    lastIndexOf(searchElement: AngularFirestoreCollection<import("firebase").firestore.DocumentData>, fromIndex?: number | undefined): number;
    every(callbackfn: (value: AngularFirestoreCollection<import("firebase").firestore.DocumentData>, index: number, array: AngularFirestoreCollection<import("firebase").firestore.DocumentData>[]) => boolean, thisArg?: any): boolean;
    some(callbackfn: (value: AngularFirestoreCollection<import("firebase").firestore.DocumentData>, index: number, array: AngularFirestoreCollection<import("firebase").firestore.DocumentData>[]) => boolean, thisArg?: any): boolean;
    forEach(callbackfn: (value: AngularFirestoreCollection<import("firebase").firestore.DocumentData>, index: number, array: AngularFirestoreCollection<import("firebase").firestore.DocumentData>[]) => void, thisArg?: any): void;
    map<U>(callbackfn: (value: AngularFirestoreCollection<import("firebase").firestore.DocumentData>, index: number, array: AngularFirestoreCollection<import("firebase").firestore.DocumentData>[]) => U, thisArg?: any): U[];
    filter<S extends AngularFirestoreCollection<import("firebase").firestore.DocumentData>>(callbackfn: (value: AngularFirestoreCollection<import("firebase").firestore.DocumentData>, index: number, array: AngularFirestoreCollection<import("firebase").firestore.DocumentData>[]) => value is S, thisArg?: any): S[];
    filter(callbackfn: (value: AngularFirestoreCollection<import("firebase").firestore.DocumentData>, index: number, array: AngularFirestoreCollection<import("firebase").firestore.DocumentData>[]) => any, thisArg?: any): AngularFirestoreCollection<import("firebase").firestore.DocumentData>[];
    reduce(callbackfn: (previousValue: AngularFirestoreCollection<import("firebase").firestore.DocumentData>, currentValue: AngularFirestoreCollection<import("firebase").firestore.DocumentData>, currentIndex: number, array: AngularFirestoreCollection<import("firebase").firestore.DocumentData>[]) => AngularFirestoreCollection<import("firebase").firestore.DocumentData>): AngularFirestoreCollection<import("firebase").firestore.DocumentData>;
    reduce(callbackfn: (previousValue: AngularFirestoreCollection<import("firebase").firestore.DocumentData>, currentValue: AngularFirestoreCollection<import("firebase").firestore.DocumentData>, currentIndex: number, array: AngularFirestoreCollection<import("firebase").firestore.DocumentData>[]) => AngularFirestoreCollection<import("firebase").firestore.DocumentData>, initialValue: AngularFirestoreCollection<import("firebase").firestore.DocumentData>): AngularFirestoreCollection<import("firebase").firestore.DocumentData>;
    reduce<U>(callbackfn: (previousValue: U, currentValue: AngularFirestoreCollection<import("firebase").firestore.DocumentData>, currentIndex: number, array: AngularFirestoreCollection<import("firebase").firestore.DocumentData>[]) => U, initialValue: U): U;
    reduceRight(callbackfn: (previousValue: AngularFirestoreCollection<import("firebase").firestore.DocumentData>, currentValue: AngularFirestoreCollection<import("firebase").firestore.DocumentData>, currentIndex: number, array: AngularFirestoreCollection<import("firebase").firestore.DocumentData>[]) => AngularFirestoreCollection<import("firebase").firestore.DocumentData>): AngularFirestoreCollection<import("firebase").firestore.DocumentData>;
    reduceRight(callbackfn: (previousValue: AngularFirestoreCollection<import("firebase").firestore.DocumentData>, currentValue: AngularFirestoreCollection<import("firebase").firestore.DocumentData>, currentIndex: number, array: AngularFirestoreCollection<import("firebase").firestore.DocumentData>[]) => AngularFirestoreCollection<import("firebase").firestore.DocumentData>, initialValue: AngularFirestoreCollection<import("firebase").firestore.DocumentData>): AngularFirestoreCollection<import("firebase").firestore.DocumentData>;
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: AngularFirestoreCollection<import("firebase").firestore.DocumentData>, currentIndex: number, array: AngularFirestoreCollection<import("firebase").firestore.DocumentData>[]) => U, initialValue: U): U;
    find<S extends AngularFirestoreCollection<import("firebase").firestore.DocumentData>>(predicate: (this: void, value: AngularFirestoreCollection<import("firebase").firestore.DocumentData>, index: number, obj: AngularFirestoreCollection<import("firebase").firestore.DocumentData>[]) => value is S, thisArg?: any): S | undefined;
    find(predicate: (value: AngularFirestoreCollection<import("firebase").firestore.DocumentData>, index: number, obj: AngularFirestoreCollection<import("firebase").firestore.DocumentData>[]) => boolean, thisArg?: any): AngularFirestoreCollection<import("firebase").firestore.DocumentData> | undefined;
    findIndex(predicate: (value: AngularFirestoreCollection<import("firebase").firestore.DocumentData>, index: number, obj: AngularFirestoreCollection<import("firebase").firestore.DocumentData>[]) => boolean, thisArg?: any): number;
    fill(value: AngularFirestoreCollection<import("firebase").firestore.DocumentData>, start?: number | undefined, end?: number | undefined): AngularFirestoreCollection<import("firebase").firestore.DocumentData>[];
    copyWithin(target: number, start: number, end?: number | undefined): AngularFirestoreCollection<import("firebase").firestore.DocumentData>[];
    [Symbol.iterator](): IterableIterator<AngularFirestoreCollection<import("firebase").firestore.DocumentData>>;
    entries(): IterableIterator<[number, AngularFirestoreCollection<import("firebase").firestore.DocumentData>]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<AngularFirestoreCollection<import("firebase").firestore.DocumentData>>;
    [Symbol.unscopables](): {
        copyWithin: boolean;
        entries: boolean;
        fill: boolean;
        find: boolean;
        findIndex: boolean;
        keys: boolean;
        values: boolean;
    };
    includes(searchElement: AngularFirestoreCollection<import("firebase").firestore.DocumentData>, fromIndex?: number | undefined): boolean;
}>;
