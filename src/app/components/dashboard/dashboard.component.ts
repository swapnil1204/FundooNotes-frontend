import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router, private location:Location) { }

  ngOnInit() {
    
  }

  refresh():void{

    //both the code is working fine but check which is good 
    
    this.router.navigateByUrl('/refresh',{skipLocationChange:true}).then(() => {
      console.log("i am in refresh method ",decodeURI(this.location.path()));
      this.router.navigate([decodeURI(this.location.path())]);
    })

    //window.location.reload();

  }
}
