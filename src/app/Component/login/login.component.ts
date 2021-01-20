import { UserService } from './../../Service/user.service';
import { Users } from '../../Models/users';
import { Observable } from 'rxjs';
import { User } from 'src/app/Models/user.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router, Routes } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Users;
  users!: Users[];
  homeIdToUpdate: any;
 
  flag: boolean = false;
  password:string="";

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) {
    this.user = new Users;
    this.getUser();
  }

  ngOnInit(): void {
  
  }

  gotoLogin() {
    if (this.user.email !== undefined && this.user.email !== null && this.user.email.length > 0) {
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].password == this.user.password && this.users[i].email == this.user.email) {
          this.password = this.users[i].password;
        }
      }
      if(this.user.password == this.password){
        alert("LOGIN SUCCESSFUL");
          this.router.navigate(['/home']);
      } else {
        alert("Please enter the correct password or email Id");
      }
    } else {
      this.flag = true;
      alert("login not called");
    }
  }
 
  getUser() {
    this.userService.getAllUsers().subscribe(service => {
      this.users = service;
    });
  }

}
