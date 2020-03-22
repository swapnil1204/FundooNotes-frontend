import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {User} from 'src/app/model/user/user';
import {HttpService} from 'src/app/services/http/http.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
 export class RegistrationComponent implements OnInit {

  user:User=new User();
  constructor( private httpService:HttpService) {
  
  }
  mobileNumber = new FormControl('', [Validators.required]);

  confirmPassword = new FormControl('', [Validators.required]);

  email = new FormControl('', [Validators.required, Validators.email])
  getErrorMessage() {
    return this.email.hasError('required') ? 'you must enter email' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  password = new FormControl('', [Validators.required])
  getErrorMessagePassword() {
    return this.password.hasError('required') ? 'you must enter password' :
      this.password.hasError('password') ? 'Not a valid password' :
        '';
  }
  firstName = new FormControl('', [Validators.required]);
  getFirstNameErrorMessage() {
    return this.firstName.hasError('required') ? 'firstname cannot be empty' :
      this.firstName.hasError('firstName') ? 'you must enter firstname' :
        '';
  }
  lastName = new FormControl('', [Validators.required]);
  getLastNameErrorMessage() {
    return this.lastName.hasError('required') ? 'lastname cannot be empty' :
      this.lastName.hasError('lastName') ? 'you must enter lastname' :
        '';
  }
  ngOnInit() {
  }
  showSucessMessage: boolean;
  serverErrorMessages: string;
  onRegister() {
    this.user.firstName = this.firstName.value;
    this.user.lastName = this.lastName.value;
    this.user.email = this.email.value;
    this.user.password = this.password.value;
    this.user.confirmPassword = this.confirmPassword.value;
    this.user.mobileNumber = this.mobileNumber.value;
    console.log("hugyhfghf");
    console.log(this.user)
    this.httpService.userRequest(this.user, '/register').subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        console.log(res);

      },
      err => {
        console.log(err)
        if (err.status === 422) {
          this.serverErrorMessages = err.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
  }
 }

  