import { Injectable } from '@angular/core';
import {newComplain} from '../Models/complains';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class complainsService {

  complainUrl="/api/complains";

  constructor(private http: HttpClient) { }


  createComplain(complain : newComplain):Observable<newComplain>{
    let httpHeaders = new HttpHeaders().set('Content-type','application/json');
    let options = {
      headers : httpHeaders
    };
    return this.http.post<newComplain>(this.complainUrl,complain,options);
  }

  getComplainById(Id : string):Observable<newComplain>{
      
    return this.http.get<newComplain>(this.complainUrl+"/"+Id);
  }
  
}
