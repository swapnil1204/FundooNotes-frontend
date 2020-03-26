import { Component, OnInit } from '@angular/core';
import { PracticeServiceService } from 'src/app/practice-service/practice-service.service';
import {FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})

export class PracticeComponent implements OnInit {

  private prac;
  StringFromPracticeService :String;

  //for search method
  userName :"";
  response : any;
  
  constructor(prac:PracticeServiceService, private http: HttpClient) {
  this.StringFromPracticeService = prac.ServicePractice();
  }

  ngOnInit() {
    let observable = this.http.get("https://api.github.com/users/swapnil1204");
    observable.subscribe((response) => { console.log(response )});
  }

  getGitHubUserName(){
    let observable = this.http.get("https://api.github.com/users/swapnil1204");
    observable.subscribe((getGitHubUserNameResponse) => { console.log("from getGitHubUserName",getGitHubUserNameResponse)});
  }
  
  search(){
    this.http.get('https://api.github.com/users/'+this.userName).subscribe((response) => {
      this.response = response;
      console.log('from search method',response);
    })
  }
}


