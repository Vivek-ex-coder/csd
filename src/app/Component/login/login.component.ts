import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Register1(regForm:any){
    var username=regForm.controls.username.value;
    var password=regForm.controls.password.value;
    
  }

  Register2(regForm:any){
    var fullname=regForm.controls.fullname.value;
    var email=regForm.controls.email.value;
    var username=regForm.controls.username.value;
    var password=regForm.controls.password.value;
  }
}
