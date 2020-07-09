import { Pipe } from '@angular/core'
import { AngularFireStorage } from '@angular/fire/storage';

/* to be used with in combination with | async */
@Pipe({
  name: 'ngFirebaseStorageUrl'
}) export class AngularFirestoreStorageUrl {
  constructor(public storage:AngularFireStorage){}

  transform(path: string) {
    return this.storage.ref(path).getDownloadURL()
    .toPromise()
    .catch(e=>path)
  }
}
