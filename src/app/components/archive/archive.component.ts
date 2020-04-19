import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})

export class ArchiveComponent implements OnInit {
  archiveNotes : any;
  constructor(private httpService:HttpService) { }

  ngOnInit() {
    this.getAllArchives();
  }
  
  showSucessMessage: boolean;
  serverErrorMessages: string;
  
  getAllArchives(){
    console.log('enter in get all notes');
  this.httpService.get('/archive').subscribe(
   ( res:any) => {
      this.showSucessMessage = true;
      setTimeout(() => this.showSucessMessage = false, 4000);
      console.log("response got ",res);
      this.archiveNotes = res.result;
      console.log('response store in ',this.archiveNotes);
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
