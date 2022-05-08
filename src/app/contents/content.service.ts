import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Content } from './content'
import { AuthService } from '../security/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  
  private url:string = "https://spring-boot-cv.herokuapp.com/contents";
  
  constructor( private http:HttpClient ) { }

  getAll():Observable<Content[]>{
    return this.http.get<Content[]>(this.url);
  }

  create(contenido:Content):Observable<Content>{
    return this.http.post<Content>(this.url, contenido);
  }

  get(id:number):Observable<Content>{
    return this.http.get<Content>(this.url+'/'+id);
  }

  delete(id:number):Observable<Content>{
    return this.http.post<Content>(this.url + '/delete/' + id, id); 
  }

}
