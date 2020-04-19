import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http/http.service';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {

  constructor(private httpService:HttpService) {}

  ngOnInit() {
    this.getAllReminders();
  }

  getAllReminders(){
    this.httpService.get('/reminder').subscribe((res:any) => {
      console.log(res);
    });
}
}
