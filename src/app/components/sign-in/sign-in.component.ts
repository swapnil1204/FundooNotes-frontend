import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user/user';
import { AllServicesService } from '../../AllServices/all-services.service';

 
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  userEmail : string ="fdet@";

  user:User = new User();
// [ngModel] evaluates the code and generates an output (without two-way binding).
// [(ngModel)] evaluates the code and generates an output and also enables two-way binding.

  constructor(private AllServices : AllServicesService) { 
  }

  email;
  password;
 
  ngOnInit() {
    
  }

  onSignIn(){
    this.user.email=this.email;
    this.user.password=this.password
    console.log('user has following data ',this.user);

    this.AllServices.getRequest(this.user);
  }

}
