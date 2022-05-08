import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../security/auth.service';
import { User } from '../security/usuario';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  e!:String;
  username:string = "";
  password:string = "";

  constructor(private auth:AuthService, private router:Router) { }
  
  logIn:Boolean = this.auth.logIn;

  login(form:NgForm){
    this.username = form.value.username;
    this.password = form.value.password;
    this.auth.login(this.username, this.password); 
  }

  logout(){
    this.auth.logout();
  }

  ngOnInit(): void {
  }
}