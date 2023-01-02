import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, ParamMap, Params, Router} from "@angular/router";

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private serversService: ServersService,
              private activatedRoute : ActivatedRoute,
              private router : Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params : Params) => {
      this.activatedRoute.queryParams.subscribe((queryParams:Params)=> {
        this.allowEdit = queryParams['allowEdit'] === '1';
      });

      const id = params['id'];
      this.server = this.serversService.getServer(id);
      this.serverStatus = this.server.status;
      this.serverName = this.server.name;
      // this.allowEdit = this.activatedRoute.snapshot.queryParams['allowEdit'] === 1;
    });
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }
}
