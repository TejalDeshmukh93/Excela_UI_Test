import { Injectable } from '@angular/core';
import { UserDetailsRepuest } from '../modules/users/add-user/add-user.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userDetails: UserDetailsRepuest[] = [];

  constructor() { }


  setUserDetails(value) {
    this.userDetails.push(value);
    console.log(this.userDetails, 'in service');
  }

}
