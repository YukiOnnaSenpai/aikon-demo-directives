import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NemzaComponent } from './nemza/nemza.component';
import { SnortijaComponent } from './snortija/snortija.component';
import { SukiComponent } from './suki/suki.component';
import { HomeDirectiveDirective } from './directives/home-directive.directive';
import { AuthInterceptor } from './services/httpInterceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NemzaComponent,
    SukiComponent,
    SnortijaComponent,
    HomeDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
