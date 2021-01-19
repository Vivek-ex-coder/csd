import { UserService } from './../../Service/user.service';
import { Users } from '../../Models/users';
import { Observable } from 'rxjs';
import { User } from 'src/app/Models/user.model';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators } from '@angular/forms';

import { Router, Routes } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:Users;
  users:Users;
  homeIdToUpdate: any;
  // user: Observable<Users[]>;
  // user: Observable<Users[]>;
  flag: boolean = false;

  constructor(private userService: UserService, private formBuilder: FormBuilder,private routes:Router) {
    this.user= new Users;
    this.users = new Users;
   }

  ngOnInit(): void {
    // this.logForm = this.formBuilder.group({
    //   mainHeading:['',[Validators.required]],
    //   desicription:['',[Validators.required]]
    // });
  }

  gotoLogin(){
    // let logData = this.logForm.value;
    if (this.user.email !== undefined && this.user.email !== null && this.user.email.length > 0) {
    this.login(this.user.email);

    }else{
      this.flag=true;
      alert("login not called");
    }
  }
  login(userId:string){
    alert(userId);

    this.userService.getUserById(userId).subscribe(logDetails=>{
      // if(logDetails.password == userId.password){
   alert(logDetails.email);

        this.routes.navigate(['/home']);

      // }
      // else{
  //       this.routes.navigate(['/login']);
  //  alert("login not called");

  //     }
      
    });
    // this.getHomeDetails();
  }







  // Register1(regForm:any){
  //   var username=regForm.controls.username.value;
  //   var password=regForm.controls.password.value;
    
  // }

  // Register2(regForm:any){
  //   var fullname=regForm.controls.fullname.value;
  //   var email=regForm.controls.email.value;
  //   var username=regForm.controls.username.value;
  //   var password=regForm.controls.password.value;
  // }
}
