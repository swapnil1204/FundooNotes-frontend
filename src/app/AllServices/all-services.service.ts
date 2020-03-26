import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllServicesService {

  constructor(private http:HttpClient) { }

  getRequest(credentials ){
    console.log('in all services from getRequest ',credentials);
    return this.http.get('');
  }

  postRequest(credentials) : any{
    console.log('in all services from postRequest ',credentials);
    return this.http.post('',credentials);
  }


}
