import { Injectable } from '@angular/core';
import { Users } from '../Models/users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl="/api/users";

  constructor(private http: HttpClient) { }


  createUser(user : Users):Observable<Users>{
    let httpHeaders = new HttpHeaders().set('Content-type','application/json');
    let options = {
      headers : httpHeaders
    };
    return this.http.post<Users>(this.userUrl,user,options);
  }

  getUserById(userId : string):Observable<Users>{
      
    return this.http.get<Users>(this.userUrl+"/"+userId);
  }

  

}
