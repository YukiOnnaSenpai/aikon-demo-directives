import { Injectable } from '@angular/core';
import { ComponentItem } from 'src/util/component-item';
import { NemzaComponent } from '../nemza/nemza.component';
import { SnortijaComponent } from '../snortija/snortija.component';
import { SukiComponent } from '../suki/suki.component';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {headers: new HttpHeaders({'Content-Type' : 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getComponents() {
    return [
      new ComponentItem(NemzaComponent, {name: 'Bombasto', bio: 'Brave as they come'}),

      new ComponentItem(NemzaComponent, {name: 'Dr IQ', bio: 'Smart as they come'}),

      new ComponentItem(SukiComponent,   {headline: 'Hiring for several positions',
                                        body: 'Submit your resume today!'}),

      new ComponentItem(SukiComponent,   {headline: 'Openings in all departments',
                                        body: 'Apply today'}),
      new ComponentItem(SnortijaComponent,   {headline: 'Hiring for several positions',
                                        body: 'Submit your resume today!'}),

      new ComponentItem(SnortijaComponent,   {headline: 'Openings in all departments',
                                        body: 'Apply today'}),
    ];
  }

  public getAll() {
    return this.http.get<Array<string>>('localhost:4200/server/advertisement/getAllComments', httpOptions);
  }

}
