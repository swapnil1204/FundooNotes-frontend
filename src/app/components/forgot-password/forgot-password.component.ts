import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {User} from '../../model/user/user'
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  user:User=new User();
  constructor( private httpService:HttpService) {
  
  }

  ngOnInit() {
  }
  email = new FormControl('',[Validators.required,Validators.email])
  getErrorMessage(){
    return this.email.hasError('required')?'you must enter email':
    this.email.hasError('email')?'Not a valid email':
    '';
  }

  showSuccessMessage:boolean;
  serverErrorMessage:string;
  onForgotPassword(){
    this.user.email = this.email.value;
    console.log(this.user)
    this.httpService.userRequest(this.user, '/forgotpassword').subscribe(
      res => {
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 4000);
        console.log(res);

      },
      err => {
        console.log(err)
        if (err.status === 422) {
          this.serverErrorMessage = err.error.join('<br/>');
        }
        else
          this.serverErrorMessage = 'Something went wrong.Please contact admin.';
      }
    );
  }
  }

