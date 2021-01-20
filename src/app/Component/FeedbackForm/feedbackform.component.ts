import { Component, OnInit } from '@angular/core';
import {  feedBService } from './../../Service/feedB.service';
import { feedC } from '../../Models/feedB';
import { Observable } from 'rxjs';
import {FormGroup,FormBuilder,Validators } from '@angular/forms';

import { Router, Routes } from '@angular/router';


@Component({
  selector: 'app-feedbackform',
  templateUrl: './feedbackform.component.html',
  styleUrls: ['./feedbackform.component.css']
})
export class FeedbackformComponent implements OnInit {

  feedA:feedC;
  feedB:feedC;
  homeIdToUpdate: any;
  // user: Observable<Users[]>;
  // user: Observable<Users[]>;
  flag: boolean = false;

  constructor(private feedAService: feedBService, private formBuilder: FormBuilder,private routes:Router) {
    this.feedA= new feedC;
    this.feedB = new feedC;
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