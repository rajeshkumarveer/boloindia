import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit {
  searchToggle:boolean=false;
  storyhead="flex";
  searchhead="none";
  userstorytoggle=false;
  userstory="social network"
  search(){
    if(!this.searchToggle){
      this.storyhead="none";
      this.searchhead="flex";
    }
    else{
      this.storyhead="flex";
      this.searchhead="none";
    }
    this.searchToggle=!this.searchToggle;
  }
  toggling(){
    if( !this.userstorytoggle) this.userstory="Contact";
    else this.userstory="social network";
    this.userstorytoggle=!this.userstorytoggle;
  }
  constructor(private authorized: AuthenticationService,private router: Router) { }

  ngOnInit(): void {
    if(!this.authorized.authentication)this.router.navigate(["login"]);
  }

}
