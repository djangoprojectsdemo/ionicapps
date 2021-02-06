import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class FirebaseProvider {

  constructor(public http: Http) {
    console.log('Hello FirebaseProvider Provider');
  }

}
