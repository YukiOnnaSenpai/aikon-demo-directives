import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { ComponentInterface } from 'src/interfaces/component-interface';
import { ComponentItem } from 'src/util/component-item';
import { HomeDirectiveDirective } from '../directives/home-directive.directive';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  components: ComponentItem[] = [];
  currentAdIndex = -1;
  @ViewChild(HomeDirectiveDirective, { static: true }) appHomeDirective!: HomeDirectiveDirective;
  interval: any;

  constructor(private homeService: HomeService,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.components= this.homeService.getComponents();
    this.loadComponent();
    this.displayComponents();

    
    // console.log("PRODAVNICA HOSTNAME IZVOLITE >>>>>> " + location.hostname)
    this.homeService.getAll();
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.components.length;
    const adItem = this.components[this.currentAdIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      adItem.component
    );

    const viewContainerRef = this.appHomeDirective.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<ComponentInterface>(
      componentFactory
    );
    componentRef.instance.data = adItem.data;

  }

  displayComponents() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

}
