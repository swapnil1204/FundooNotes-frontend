import { Component, OnInit } from '@angular/core';
import { PracticeServiceService } from 'src/app/practice-service/practice-service.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {

  private prac;
  StringFromPracticeService :String;
  constructor(prac:PracticeServiceService) {
    this.StringFromPracticeService = prac.ServicePractice();
   }

  ngOnInit() {
  }

}
