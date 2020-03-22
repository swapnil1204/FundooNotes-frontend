import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  popUp=false;

  constructor() {
    
   }

  ngOnInit() {
  }

  
  pop(){
    console.log(1)
    this.popUp = true;
  }

}
