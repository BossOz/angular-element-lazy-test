import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ServicesService } from 'services';

@Component({
  selector: 'app-element-container',
  templateUrl: './element-container.component.html'
})
export class ElementContainerComponent implements OnInit, OnDestroy {

  @Input() name: string = "";
  @Input() ownerWindow: any;
  
  constructor() { }
  
  ngOnInit(): void { }

  ngOnDestroy(): void {
    console.log("ElementContainerComponent - ngOnDestroy");
  }
  
}