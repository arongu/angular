import { Component } from '@angular/core';

@Component({
  // selector: 'app-servers',
  selector: '[app-servers]', // CSS attribute selector
  // templateUrl: './servers.component.html',
  template: `
<app-server></app-server>
<app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

}
