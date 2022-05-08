import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../security/auth.service';
import { Header } from './header';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private url:string = "https://spring-boot-cv.herokuapp.com/headers";
  
  constructor( private http:HttpClient ) { }

  update(header:Header):Observable<Header>{
    return this.http.post<Header>(this.url, header);
  }

  get(id:number):Observable<Header>{  
    return this.http.get<Header>(this.url+'/'+id);
  }
}
