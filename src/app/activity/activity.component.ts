import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html'
})
export class ActivityComponent implements OnInit {

  constructor(private authorized: AuthenticationService,private router: Router) { }

  ngOnInit(): void {
    if(!this.authorized.authentication)this.router.navigate(["login"]);
  }

}
