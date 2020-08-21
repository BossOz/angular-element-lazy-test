import { Component, OnInit, OnDestroy, Input, ChangeDetectorRef } from '@angular/core';
import { ServicesService } from 'services';

@Component({
  selector: 'vdr-custom',
  templateUrl: './custom.component.html'
})
export class CustomComponent implements OnInit, OnDestroy {

  private _ownerWindow: any;
  get ownerWindow(): any {
    return this._ownerWindow;
  }
  @Input() 
  set ownerWindow (value: any) {
    this._ownerWindow = value;
    
    if(this._ownerWindow != null) {
      this.service = this._ownerWindow.getService();
    }
  }

  @Input() name: string = "";
  
  private service: ServicesService;

  /*
  private _service: ServicesService;
  get service(): ServicesService {
    return this._service;
  }
  @Input() 
  set service(value: ServicesService) {
    this._service = value;
    
    
    if(this._service != null) {
      
      this._service.statusChanged.subscribe(status => {
        
        //console.log("statusChanged", status);
        //this.status = status;

        this.cd.detectChanges();

      });
    }
    

  }
  */

  get status(): number {
    try {
      if(this.service == null) return 0;
      return this.service.status;
    } catch (error) { }
  }
  
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void { }

  ngOnDestroy() {
    console.log("CustomComponent - ngOnDestroy");
  }

}
