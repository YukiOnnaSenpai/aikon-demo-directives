import { Component, Input } from '@angular/core';
import { ComponentInterface } from 'src/interfaces/component-interface';

@Component({
  selector: 'app-snortija',
  templateUrl: './snortija.component.html',
  styleUrls: ['./snortija.component.css']
})
export class SnortijaComponent implements ComponentInterface {
  @Input() data:any;
}
