import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string} | undefined;
  serverName = '';
  serverStatus = '';

  constructor(private serversService: ServersService, private activatedRoute : ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe();
    this.activatedRoute.fragment.subscribe();

    this.server = this.serversService.getServer(1);
    // @ts-ignore
    this.serverName = this.server.name;
    // @ts-ignore
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    // @ts-ignore
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
