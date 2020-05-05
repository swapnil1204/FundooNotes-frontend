import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { Notes } from 'src/app/model/user/notes';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  popUp=false;
  userNotes:Notes=new Notes();
  title : string = "";
  description : string;

  constructor(private httpService : HttpService) {
  }

  ngOnInit() {
    
  }

  
  pop(){
    console.log(1)
    this.popUp = true;
  }
  
  addNotes(){
    this.userNotes.title = this.title;
    this.userNotes.description = this.description;
    console.log(" title = "+this.title+" "+" description = "+this.description);
    this.httpService.posting(this.userNotes,'/notes').subscribe((res:any)=>{ 
        console.log(' response is = ',res);
        this.popUp=false;
    })

  }
}
