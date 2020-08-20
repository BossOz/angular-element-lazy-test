import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'vdr-custom',
  templateUrl: './custom.component.html'
})
export class CustomComponent implements OnInit, OnDestroy {

  @Input() name: string = "";

  constructor() { }

  ngOnInit(): void { }

  ngOnDestroy() {
    console.log("CustomComponent - ngOnDestroy");
  }

}
