import { Injectable, ɵɵsetComponentScope } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };
  

  constructor(private http: HttpClient) { }


  postMessage(message: any){
    console.log("hitting messages")
    return this.http.post<any>('http://localhost:3000/messages', message, this.httpOptions)
 
}
}
