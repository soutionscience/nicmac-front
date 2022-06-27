import { Injectable, ɵɵsetComponentScope } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  uri = 'https://nicmac-server.herokuapp.com/messages'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };
  

  constructor(private http: HttpClient) {
 
   }


  postMessage(message: any){
    console.log("hitting messages")
    return this.http.post<any>(this.uri, message, this.httpOptions)
 
}
}
