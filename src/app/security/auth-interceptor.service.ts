import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import Swal from 'sweetalert2';


import { ErrorService } from '../error/error.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor( private auth:AuthService, private errorService:ErrorService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token: string = localStorage.getItem('token') || "";

    let request = req;

    if (token) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${ token }`
        }
      });
    }

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {

        if (err.status == 403) {
          if (localStorage.getItem("token")) {
            this.auth.logout();
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Error al iniciar sesión',
              text: 'Usuario o contraseña incorrectos',
            });
          }
        }
        
          Swal.fire({
          icon: 'warning',
          text: (err.error.message) || "Ocurrió un error",
        });

        return throwError(err.error.message);
      })
    );
  }

}


