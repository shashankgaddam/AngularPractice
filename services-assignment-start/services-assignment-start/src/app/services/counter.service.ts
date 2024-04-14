import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  activeToInactiveCtr: number = 0;
  inactiveToActiveCtr: number = 0;

  activeToInactiveCount() {
    this.activeToInactiveCtr++;
    console.log('The count of the Active to Inactive ', this.activeToInactiveCtr);
  }

  inactiveToActiveCount() {
    this.inactiveToActiveCtr++;
    console.log('The count of the Inactive to Active ', this.inactiveToActiveCtr);
  }
}
