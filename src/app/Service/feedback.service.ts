import { Injectable } from '@angular/core';
import {feeds} from '../Models/feedback';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class feedbackService {

  feedUrl="/api/feedback";

  constructor(private http: HttpClient) { }


  createFeed(feed : feeds):Observable<feeds>{
    let httpHeaders = new HttpHeaders().set('Content-type','application/json');
    let options = {
      headers : httpHeaders
    };
    return this.http.post<feeds>(this.feedUrl,feed,options);
  }

  getFeedById(Id : string):Observable<feeds>{
      
    return this.http.get<feeds>(this.feedUrl+"/"+Id);
  }
  getAllUsers():Observable<feeds[]>{
    return this.http.get<feeds[]>(this.feedUrl);
  }

  
}
