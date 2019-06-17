import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { UserDetailsRepuest } from '../add-user/add-user.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';



export interface PeriodicElement {
  firstname: string;
  lastname: string;
  username: string;
  city: string;
  department: string;
}


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['firstname', 'lastname', 'username', 'city', 'department'];
  dataSource;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  // dataSource = USER_DATA;
  constructor(private userservice: UserService, ) { }

  ngOnInit() {

    this.getUserDetails();

  }

  getUserDetails() {
    // bind data to mat table
    this.dataSource = new MatTableDataSource<UserDetailsRepuest>(this.userservice.userDetails);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
