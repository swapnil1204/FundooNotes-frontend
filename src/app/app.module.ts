import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppMaterialModule} from './app-material.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { HttpService} from './services/http/http.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppMaterialModule,
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})

export class AppModule { }