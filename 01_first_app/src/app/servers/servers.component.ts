import { Component } from '@angular/core';

@Component({
  selector: 'app-servers, [app-servers], .app-servers, #app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverName = "TestServer";
  serverCreationStatus = "No server was created!";
  serverCreated = false;
  servers = ['TestServer', 'TestServer2'];

  constructor() {
    setTimeout(() => this.allowNewServer = true, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
  }

  onUpdateServerName(event: Event) {
    console.log(event.target["value"]);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
