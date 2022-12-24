import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counterActivates  : number = 0;
  private counterDeactivates: number = 0;

  activated() : void {
    this.counterActivates = this.counterActivates + 1;
    console.log("Activates so far: " + this.counterActivates);
  }

  deactivated() : void {
    this.counterDeactivates = this.counterDeactivates + 1;
    console.log("Deactivates so far: " + this.counterDeactivates);
  }

  constructor() {
  }
}
