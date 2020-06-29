import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-appfooter',
  templateUrl: './appfooter.component.html'
})
export class AppfooterComponent implements OnInit {
  @Input("activeId") activeId;
  logout(){
    localStorage.clear();
    this.authorized.authentication=false; 
    this.authorized.email="";
    this.authorized.password="";
    this.router.navigate(["login"]);
  }
  constructor(private authorized: AuthenticationService,private router: Router) { }

  ngOnInit(): void {
    if(this.activeId=="1")document.getElementById("1").style.fill="#1b6fddee";
    if(this.activeId=="2")document.getElementById("2").style.fill="#1b6fddee";
    if(this.activeId=="3")document.getElementById("3").style.fill="#1b6fddee";
    if(this.activeId=="4")document.getElementById("4").style.fill="#1b6fddee";
    console.log(this.activeId=="1");
    
  }

}
