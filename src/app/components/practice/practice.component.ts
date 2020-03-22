import { Component, OnInit } from '@angular/core';
import { PracticeServiceService } from 'src/app/practice-service/practice-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})

export class PracticeComponent implements OnInit {

  private prac;
  StringFromPracticeService :String;
  
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
  
}


