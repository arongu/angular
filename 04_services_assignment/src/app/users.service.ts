import {EventEmitter, Injectable} from '@angular/core';
import {CounterService} from "./counter.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  inactiveUsersUpdated : EventEmitter<string[]> = new EventEmitter<string[]>();
  activeUsersUpdated   : EventEmitter<string[]> = new EventEmitter<string[]>();

  private activeUsers   = ['Max', 'Anna'];
  private inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService : CounterService) {
  }

  private update() {
    this.inactiveUsersUpdated.emit(this.inactiveUsers);
    this.activeUsersUpdated.emit(this.activeUsers);
  }

  setToInactive(id:number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.deactivated();
    this.update();
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.activated();
    this.update();
  }

  getInactiveUsers() : string[] {
    return this.inactiveUsers;
  }

  getActiveUsers() : string[] {
    return this.activeUsers;
  }
}
