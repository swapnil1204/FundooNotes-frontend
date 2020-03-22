import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationComponent} from './components/registration/registration.component'
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetAllnotesComponent } from './components/get-allnotes/get-allnotes.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';

//new project api
import {PracticeComponent} from './components/practice/practice.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegistrationComponent},
  {path:'forgotpassword',component:ForgotPasswordComponent},
  {path:'resetpassword',component:ResetPasswordComponent},
  {path:'dashboard',component:DashboardComponent ,children:[
    {path:'notes', component:GetAllnotesComponent},
    {path:'archive', component:ArchiveComponent},
    {path:'trash', component:TrashComponent}
  ]
},
{path:'signin',component:SignInComponent},
{path:'signup',component:SignUpComponent},
{path:'practice',component:PracticeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }