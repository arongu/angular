import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output()
  featureSelected = new EventEmitter<string>();

  onSelect(feature: string) : void {
    this.featureSelected.emit(feature);

    // switch (feature) {
    //   case 'recipe' : {} break;
    //   case 'shopping-list' : {} break;
    //   default : console.log("Unknown feature: " + feature);
    // }
  }
}
