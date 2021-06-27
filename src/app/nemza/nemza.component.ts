import { Component, Input } from '@angular/core';
import { ComponentInterface } from 'src/interfaces/component-interface';

@Component({
  selector: 'app-nemza',
  templateUrl: './nemza.component.html',
  styleUrls: ['./nemza.component.css']
})
export class NemzaComponent implements ComponentInterface {
  @Input() data:any;

}
