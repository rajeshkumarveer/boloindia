import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  email="";
  password="";
  authentication=localStorage.getItem("email")!==null?true:false;
  constructor() { }
}
