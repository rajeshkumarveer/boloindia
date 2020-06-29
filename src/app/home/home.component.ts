import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private authorized: AuthenticationService,private router: Router) { }

  ngOnInit(): void {
    if(!this.authorized.authentication)this.router.navigate(["/login"]);
  }

}
