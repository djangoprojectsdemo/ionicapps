import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserProvider {

  username:string="jay";

  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }

}
