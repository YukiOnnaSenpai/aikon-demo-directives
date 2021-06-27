import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHomeDirective]'
})
export class HomeDirectiveDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
