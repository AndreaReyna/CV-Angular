import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  e!:string;
  token!:string;
  url:string = "https://spring-boot-cv.herokuapp.com/login";

  constructor( private http:HttpClient, private router: Router ) { }

login(username:string, password:string){ 
    localStorage.clear(); 
    this.http.post(this.url, {username: username, password:password})
    .subscribe((resp:any) => {
    location.reload();
    localStorage.setItem('token', resp.token);
    });
  }

  logout(){
    localStorage.removeItem('token');
    location.reload();
  }


  public get headers():HttpHeaders{
    return new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
  }

  public get logIn(): boolean{
    return (localStorage.getItem('token') !== null);
  }
}
