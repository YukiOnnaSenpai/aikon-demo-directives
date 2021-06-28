import { HttpHeaders, HttpClient, HttpInterceptor,
  HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HomeService } from './home.service';
import { catchError, finalize } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private homeService: HomeService,
  ) {}
/*
  intercept(req: HttpRequest<unknown>,
    next: HttpHandler): Observable<HttpEvent<unknown>> {
      this.homeService.getAll();
      return next.handle(req).pipe(
        catchError((error: HttpErrorResponse) => {
          console.log("PRODAVNICA HOSTNAME IZVOLITE >>>>>> " + location.hostname);
          this.homeService.getAll();

          return throwError(error);
        }),
        finalize(() => {
          console.log('Nocni klub i svi smo tu.');

        })
      ) as Observable<HttpEvent<any>>;

    

  } */

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("nemza govno" +location.hostname);

    return next.handle(request);
  }


  getCookie(cname: string) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }


}