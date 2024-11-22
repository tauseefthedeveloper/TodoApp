import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserLogin } from '../model/userData';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  apiUrlUser:string='/api/User/';
  constructor() { }
  http=inject(HttpClient);

  userLogin(ob:any){
    return this.http.post(`${this.apiUrlUser}Login`,ob);
  }

  userRegistration(ob:any){
    return this.http.post(`${this.apiUrlUser}CreateNewUser`,ob)
  }
}
