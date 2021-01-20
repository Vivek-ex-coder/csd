import { Injectable } from '@angular/core';
import {feedC} from '../Models/feedB';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedBService {

  feedUrl="/api/feedB";

  constructor(private http: HttpClient) { }


  createfeedD(feedA : feedC):Observable<feedC>{
    let httpHeaders = new HttpHeaders().set('Content-type','application/json');
    let options = {
      headers : httpHeaders
    };
    return this.http.post<feedC>(this.feedUrl,feedA,options);
  }

  getfeedDById(Id : string):Observable<feedC>{
      
    return this.http.get<feedC>(this.feedUrl+"/"+Id);
  }
  getAllUsers():Observable<feedC[]>{
    return this.http.get<feedC[]>(this.feedUrl);
  }

  
}
