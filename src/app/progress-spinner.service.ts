import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ProgressSpinnerService {
  public spinnerActive: EventEmitter<Boolean>;

  constructor() {
    this.spinnerActive = new EventEmitter();
  }
  active() {
    this.spinnerActive.emit(true);
  }
  deactivate() {
    this.spinnerActive.emit(false);
  }
}
