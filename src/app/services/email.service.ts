import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private url = "https://mailthis.to/jesslading"
  constructor(private http: HttpClient){}

  sendEmail(input: any): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(input);
    input._subject = "test"
    input._replyto = "jessicaroa3@gmail.com"
    input._after = "localhost:4200"
    console.log(body)
    return this.http.post(this.url, input)
  }
}
