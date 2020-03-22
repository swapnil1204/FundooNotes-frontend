import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})

export class ArchiveComponent implements OnInit {
  userArchives : any;
  constructor(private httpService:HttpService) { }

  ngOnInit() {
  }
  
  showSucessMessage: boolean;
  serverErrorMessages: string;
  
  getAllArchives(){
    console.log('enter in get all notes');
  this.httpService.get('/isArchive').subscribe(
   ( res:any) => {
      this.showSucessMessage = true;
      setTimeout(() => this.showSucessMessage = false, 4000);
      console.log(res.data);
      this.userArchives = res.data;
      console.log('yesss',this.userArchives);
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
