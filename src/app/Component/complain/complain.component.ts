import { Component, OnInit } from '@angular/core';
import { complainsService } from '../../Service/complains.service';
import { newComplain } from '../../Models/complains';
import { Observable } from 'rxjs';
import {FormGroup,FormBuilder,Validators } from '@angular/forms';

import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-complain',
  templateUrl: './complain.component.html',
  styleUrls: ['./complain.component.css']
})
export class ComplainComponent implements OnInit {

  
  complain:newComplain;
  complains:newComplain;
  homeIdToUpdate: any;
  // user: Observable<Users[]>;
  // user: Observable<Users[]>;
  flag: boolean = false;

  constructor(private userService: complainsService, private formBuilder: FormBuilder,private routes:Router) {
    this.complain= new newComplain;
    this.complains = new newComplain;
   }

   ngOnInit(): void {
    // this.logForm = this.formBuilder.group({
    //   mainHeading:['',[Validators.required]],
    //   desicription:['',[Validators.required]]
    // });
  }

  goToSubmit(){
    
  }
}
