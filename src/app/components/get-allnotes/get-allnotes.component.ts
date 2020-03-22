import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http/http.service';

@Component({
  selector: 'app-get-allnotes',
  templateUrl: './get-allnotes.component.html',
  styleUrls: ['./get-allnotes.component.scss']
})

export class GetAllnotesComponent implements OnInit {
  userNotes: any;
  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.getAllNotes();
  }

  showSucessMessage: boolean;
  serverErrorMessages: string;

  getAllNotes() {
    console.log('enter in get all notes');
    this.httpService.get('/notes').subscribe(
      (res: any) => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        console.log(res.data);
        this.userNotes = res.data;
        console.log('yesss', this.userNotes);
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
