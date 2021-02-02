import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/Service/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  allUser!:Object;

  constructor(private signupService:SignupService) { }

  ngOnInit(): void {
    this.getLatestUser();
  }

  addUser(formObj: any){
    console.log(formObj)
    this.signupService.createUser(formObj).subscribe((response)=> {
      this.getLatestUser();

    });
} 
  getLatestUser() {
    this.signupService.getAllUser().subscribe((response)=>{
      this.allUser = response
      console.log("User has been Added")
    })
  }
}
