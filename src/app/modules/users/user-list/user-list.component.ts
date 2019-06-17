import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { UserDetailsRepuest } from '../add-user/add-user.component';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  firstname: string;
  lastname: string;
  username: string;
  city: string;
  department: string;
}

const USER_DATA: PeriodicElement[] = [
  { firstname: 'Rahul', lastname: 'Kale', username: 'rahul@gmail.com', city: 'pune', department: 'UI' },
  { firstname: 'Tejal', lastname: 'Deshmukh', username: 'tejal@gmail.com', city: 'nagpur', department: 'SQL' },
  { firstname: 'Neha', lastname: 'Deshpande', username: 'neha@gmail.com', city: 'satara', department: 'Testing' },
  { firstname: 'Payal', lastname: 'Jain', username: 'payal@gmail.com', city: 'nasik', department: 'TeamLead' },
  { firstname: 'Ashok', lastname: 'Lokare', username: 'ashok@gmail.com', city: 'mumbai', department: 'HR' },
  { firstname: 'Jagdish', lastname: 'Wagh', username: 'jagdish@gmail.com', city: 'amravati', department: 'Recuter' },

];
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['firstname', 'lastname', 'username', 'city', 'department'];
  dataSource;
  // dataSource = USER_DATA;
  constructor(private userservice: UserService, ) { }

  ngOnInit() {
    this.getUserDetails();

  }

  getUserDetails() {
    // bind data to mat table
    this.dataSource = new MatTableDataSource<UserDetailsRepuest>(this.userservice.userDetails);
  }

}
