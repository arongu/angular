import { Component, EventEmitter, Input, Output } from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  inactiveUsers! : string[];

  constructor(private usersService : UsersService) {
    this.usersService.inactiveUsersUpdated.subscribe((inactiveUsers : string[]) => {
      this.inactiveUsers = inactiveUsers;
    });

    this.inactiveUsers = this.usersService.getInactiveUsers();
  }

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
  }
}
