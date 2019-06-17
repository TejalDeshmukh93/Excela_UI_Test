import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

export class UserDetailsRepuest {
  // model define for userdetails json keys
  firstname: string;
  lastname: string;
  username: string;
  city: string;
  department: string;
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup; // form id

  constructor(private formbuilder: FormBuilder, private userservice: UserService, private router: Router) { }

  ngOnInit() {
    this.initializedForm();  // call function to intialized controls
  }

  initializedForm() {
    // initialize form controls 
    this.userForm = this.formbuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      city: ['', Validators.required],
      department: ['', Validators.required],
    });

  }

  saveUserDetails() {
    // capture user details values and save
    const userdetails = new UserDetailsRepuest();
    userdetails.firstname = this.userForm.get('firstname').value;
    userdetails.lastname = this.userForm.get('lastname').value;
    userdetails.username = this.userForm.get('username').value;
    userdetails.city = this.userForm.get('city').value;
    userdetails.department = this.userForm.get('department').value;
    this.userservice.setUserDetails(userdetails);
    this.router.navigate(['/userContainer']);

  }
}
