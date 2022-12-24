import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private activeUsers   = ['Max', 'Anna'];
  private inactiveUsers = ['Chris', 'Manu'];

  inactiveUsersUpdated : EventEmitter<string[]> = new EventEmitter<string[]>();
  activeUsersUpdated   : EventEmitter<string[]> = new EventEmitter<string[]>();

  private update() {
    this.inactiveUsersUpdated.emit(this.inactiveUsers);
    this.activeUsersUpdated.emit(this.activeUsers);
  }

  setToInactive(id:number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.update();
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.update();
  }

  getInactiveUsers() : string[] {
    return this.inactiveUsers;
  }

  getActiveUsers() : string[] {
    return this.activeUsers;
  }

  constructor() {
  }
}
