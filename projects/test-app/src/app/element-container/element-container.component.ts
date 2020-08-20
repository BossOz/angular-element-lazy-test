import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-element-container',
  templateUrl: './element-container.component.html'
})
export class ElementContainerComponent implements OnInit, OnDestroy {

  @Input() name: string = "";

  constructor() { }
  
  ngOnInit(): void { }

  ngOnDestroy(): void {
    console.log("ElementContainerComponent - ngOnDestroy");
  }
  
}