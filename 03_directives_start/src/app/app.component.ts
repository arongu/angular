import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  even_numbers = [ 2, 4 ];
  odd_numbers  = [ 1, 3, 5];
  onlyOdd = false;
}
