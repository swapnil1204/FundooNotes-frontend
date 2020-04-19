import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http/http.service';
@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  userTrash :any;
  constructor(private httpService:HttpService) { }

  ngOnInit() {
    this.getAllTrash();
  }
  showSucessMessage: boolean;
  serverErrorMessages: string;
  
  getAllTrash(){
    console.log('enter in get all trash');
  this.httpService.get('/trash').subscribe(
   ( res:any) => {
      this.showSucessMessage = true;
      setTimeout(() => this.showSucessMessage = false, 4000);
      console.log(res.result);
      this.userTrash = res.result;
      console.log('yesss',this.userTrash);
    },
    err => {
      console.log(err);
      if (err.status === 422) {
        this.serverErrorMessages = err.error.join('<br/>');
      }
      else
        this.serverErrorMessages = 'Something went wrong !';
    }
  );
}
}
