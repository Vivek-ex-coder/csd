import { Component, OnInit } from '@angular/core';
import {  feedbackService } from '../../Service/feedback.service';
import { feeds } from '../../Models/feedback';
import { Observable } from 'rxjs';
import {FormGroup,FormBuilder,Validators } from '@angular/forms';

import { Router, Routes } from '@angular/router';


@Component({
  selector: 'app-feedbackform',
  templateUrl: './feedbackform.component.html',
  styleUrls: ['./feedbackform.component.css']
})
export class FeedbackformComponent implements OnInit {

  // feed:feeds;
  // feedback:feeds;
  // homeIdToUpdate: any;
  // // user: Observable<Users[]>;
  // // user: Observable<Users[]>;
  // flag: boolean = false;

  // constructor(private feedAService: feedbackService, private formBuilder: FormBuilder,private routes:Router) {
  //   this.feed= new feeds;
  //   this.feedback = new feeds;
  //  }

   ngOnInit(): void {
    // this.logForm = this.formBuilder.group({
    //   mainHeading:['',[Validators.required]],
    //   desicription:['',[Validators.required]]
    // });
  }

  // goToSubmit(){
    
  // }
}