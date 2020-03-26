import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user/user';

import { AllServicesService } from '../../AllServices/all-services.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user : User = new User();
  username;
  email;
  password;
  confirmpassword;

  constructor( private AllServices:AllServicesService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('i am in on submit');
    this.user.userName = this.username;
    this.user.email = this.email;
    this.user.password = this.password;
    this.user.confirmPassword = this.confirmpassword;
    console.log(this.user);

    this.AllServices.postRequest(this.user);
  }

}
