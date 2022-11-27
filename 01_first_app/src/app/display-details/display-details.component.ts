import { Component } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent {
  displayDetails = false;
  clicks : string[] = [];

  toggleDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    this.logClick();
  }

  logClick() {
    this.clicks.push(new Date(Date.now()).toLocaleString());
  }
}
