import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-element-container',
  templateUrl: './element-container.component.html'
})
export class ElementContainerComponent implements OnInit {

  @Input() name: string = "";

  constructor() { }

  ngOnInit(): void { }

}