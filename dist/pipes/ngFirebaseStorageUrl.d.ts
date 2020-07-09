import { AngularFireStorage } from '@angular/fire/storage';
export declare class AngularFirestoreStorageUrl {
    storage: AngularFireStorage;
    constructor(storage: AngularFireStorage);
    transform(path: string): import("rxjs").Observable<any>;
}
