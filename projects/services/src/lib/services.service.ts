import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private _status: number = 1;
  get status(): number {
    return this._status;
  }
  set status (value: number) {
    this._status = value;
    this.statusChanged.emit(this._status);
  }

  statusChanged: EventEmitter<number>;

  constructor() { 
    this.statusChanged = new EventEmitter();
  }
}
