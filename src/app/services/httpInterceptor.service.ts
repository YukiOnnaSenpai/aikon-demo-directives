import {HttpInterceptor,
  HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from './home.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private homeService : HomeService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Welcome to interceptor");
    console.log(location.hostname);
    return next.handle(req);
  }
}