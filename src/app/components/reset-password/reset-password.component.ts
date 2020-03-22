import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, AbstractControl } from '@angular/forms';
import {User} from '../../model/user/user';
import {HttpService} from '../../services/http/http.service'
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  user:User=new User();
  constructor( private httpService:HttpService) {
  
  }

  ngOnInit() {
  }
  password = new FormControl('',[Validators.required])
  getPasswordErrorMessage(){
    return this.password.hasError('required')?'you must enter password':
    this.password.hasError('password')?'Not a valid password':
    '';
  }
  confirm = new FormControl('',[Validators.required])
  getConfirmErrorMessage(){
    return this.confirm.hasError('required')?'you must enter confirm password':
    this.confirm.hasError('confirm')?'Not a valid password':
    '';
  }
  passwordMatchValidator(control: AbstractControl) {
    const password: string = control.get('password').value; // get password from our password form control
    const confirm: string = control.get('confirm').value; // get password from our confirmPassword form control
    if (password !== confirm) {
      //confirmPassword if they don't match, set an error in our confirmPassword form control
      control.get('confirm').setErrors({ NoPassswordMatch: true });
    }
  }
  showSuccessMessage:boolean;
  serverErrorMessage:string;
  onResetPassword(){
    this.user.password = this.password.value;
    console.log(this.user)
    //token:String = localStorage.getItem('token');
    this.httpService.userResetRequest(this.user, '/resetpassword').subscribe(
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
