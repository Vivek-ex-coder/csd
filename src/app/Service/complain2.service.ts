import { Injectable } from '@angular/core';
import {complainC} from '../Models/complainB';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplainBService {

  complainUrl="/api/complainB";

  constructor(private http: HttpClient) { }


  createcomplainD(complainA : complainC):Observable<complainC>{
    let httpHeaders = new HttpHeaders().set('Content-type','application/json');
    let options = {
      headers : httpHeaders
    };
    return this.http.post<complainC>(this.complainUrl,complainA,options);
  }

  getcomplainDById(Id : string):Observable<complainC>{
      
    return this.http.get<complainC>(this.complainUrl+"/"+Id);
  }
  
}
