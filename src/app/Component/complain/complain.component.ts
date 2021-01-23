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

  
 
   ngOnInit(): void {
  }

  
}
