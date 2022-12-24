import { Component, EventEmitter, Input, Output } from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  activeUsers! : string[];

  constructor(private usersService: UsersService) {
    this.usersService.activeUsersUpdated.subscribe((activeUsers : string[]) => {
      this.activeUsers = activeUsers;
    })

    this.activeUsers = this.usersService.getActiveUsers();
  }

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
  }
}
