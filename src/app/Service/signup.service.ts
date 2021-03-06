import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private _http:HttpClient) { }
  
  createUser(user: any){
    return this._http.post("http://localhost:3000/records", user);
  }
  getAllUser(){
    return this._http.get("http://localhost:3000/records");
  }
}
