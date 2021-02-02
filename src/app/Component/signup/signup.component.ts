import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/Service/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private signupService:SignupService) { }

  ngOnInit(): void {
  }

  addUser(formObj: any){
    console.log(formObj);}
}
