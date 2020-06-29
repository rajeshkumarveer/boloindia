import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
  error="";
  
  login(event,email,password){
    event.preventDefault();
    if(email.value !=="" && email.value.replace('@','')!=="" && password.value !=="" && email.value.includes("@")){
      this.authorized.email=email.value; 
      this.authorized.password=password.value;
      this.authorized.authentication=true; 
      localStorage.setItem("email",email.value);
      this.error="";
      email.value="";
      password.value="";
      this.router.navigate([""]);
    }
    else {
      this.error="enter valid Information";
    }
  }
  constructor(private authorized: AuthenticationService,private router: Router) { }

  ngOnInit(): void {
    if(this.authorized.authentication)this.router.navigate([""]);
  }

}
