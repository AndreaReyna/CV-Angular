import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../security/auth.service';
import { Headline } from './headline';

@Injectable({
  providedIn: 'root'
})
export class HeadlineService {
  private url:string = "https://spring-boot-cv.herokuapp.com/headlines";

  constructor( private http:HttpClient, private auth:AuthService ) { }

  getAll():Observable<Headline[]>{
    
    return this.http.get<Headline[]>(this.url);
  }

  create(headline:Headline):Observable<Headline>{
    return this.http.post<Headline>(this.url, headline);
  }

  get(idHeadline:number):Observable<Headline>{
    return this.http.get<Headline>(this.url+'/search/'+idHeadline);
  }

  baja(id:number):Observable<Headline>{ 
    return this.http.post<Headline>(this.url + '/delete/' + id, id); 
  }
}
