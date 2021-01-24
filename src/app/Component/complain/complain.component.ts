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
  Id='';
  custName='' ;
  mail='' ;
  productName='' ;
  productId='' ;
  productAdress='' ;
  contactNumber='' ;
  repair='' ;
  complain='' ;

 
   ngOnInit(): void {
  }

  
  inputA(event:any){
    this.custName = (<HTMLInputElement>event.target).value;
    }
  inputB(event:any){
    this.mail = (<HTMLInputElement>event.target).value;
  }
  inputC(event:any){
    this.productName = (<HTMLInputElement>event.target).value;
    }
    inputD(event:any){    
      this.productId = (<HTMLInputElement>event.target).value;
       }
    inputE(event:any){
      this.productAdress = (<HTMLInputElement>event.target).value;
      }
    inputF(event:any){
      this.contactNumber = (<HTMLInputElement>event.target).value;
    }
    inputG(event:any){
      this.repair = (<HTMLInputElement>event.target).value;
      }
    inputH(event:any){
      this.complain = (<HTMLInputElement>event.target).value;
       }
  sub(){
     
    console.log(this.custName);
    console.log(this.mail); 
    console.log(this.productName);
    console.log(this.productId); 
    console.log(this.productAdress);
    console.log(this.contactNumber); 
    console.log(this.repair);
    console.log(this.complain);
    
  }
}
