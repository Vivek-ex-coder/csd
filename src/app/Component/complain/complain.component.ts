import { Component, OnInit } from '@angular/core';
import { ComplainBService } from './../../Service/complain2.service';
import { complainC } from '../../Models/complainB';
import { Observable } from 'rxjs';
import {FormGroup,FormBuilder,Validators } from '@angular/forms';

import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-complain',
  templateUrl: './complain.component.html',
  styleUrls: ['./complain.component.css']
})
export class ComplainComponent implements OnInit {

  
  complainA:complainC;
  complainB:complainC;
  homeIdToUpdate: any;
  // user: Observable<Users[]>;
  // user: Observable<Users[]>;
  flag: boolean = false;

  constructor(private userService: ComplainBService, private formBuilder: FormBuilder,private routes:Router) {
    this.complainA= new complainC;
    this.complainB = new complainC;
   }

   ngOnInit(): void {
    // this.logForm = this.formBuilder.group({
    //   mainHeading:['',[Validators.required]],
    //   desicription:['',[Validators.required]]
    // });
  }


}
