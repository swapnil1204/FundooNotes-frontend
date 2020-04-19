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
   console.log("requesting url ",environment.baseUrl + url);
   console.log("response is = = " ,response);
   return response;
  }


  posting(user, url) {
    console.log(this.token);
    const httpOptions = {
      headers : new HttpHeaders({  
        'token': this.token 
        }) 
    }
    let response = this.http.post(environment.baseUrl + url, user,httpOptions);
    console.log('i am in user request method http service');
    console.log('hitting at ',environment.baseUrl + url);
    console.log('data is ',user);
    return response;
  }
}