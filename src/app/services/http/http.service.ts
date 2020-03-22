import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../user/user.service'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  userRequest(user, url) {
    let response = this.http.post(environment.baseUrl + url, user);
    return response;
  }

  userResetRequest(user, url) {
    let response = this.http.post(environment.baseUrl + url, user);
    return response;
  }

  token:string = localStorage.getItem('token');
  
  get(url){
    console.log(this.token);

   const httpOptions  = {
    headers:new HttpHeaders({
      'token' : this.token
     })
   }
   let response = this.http.get(environment.baseUrl + url,httpOptions);
   return response;
  }
}
