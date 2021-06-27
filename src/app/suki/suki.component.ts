import { Component, Input } from '@angular/core';
import { ComponentInterface } from 'src/interfaces/component-interface';

@Component({
  selector: 'app-suki',
  templateUrl: './suki.component.html',
  styleUrls: ['./suki.component.css']
})
export class SukiComponent implements  ComponentInterface{
  @Input() data:any;
}
