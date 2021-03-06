import { UserService } from './Service/user.service';
import { TestData } from './testData';
import { MenuComponent } from './Component/menu/menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule } from '@angular/common/http'; 
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import {  InMemoryWebApiModule  } from 'angular-in-memory-web-api';    


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/Login/login.component';
import { HomeComponent } from './Component/Home/home.component';
import { FeedbackformComponent } from './Component/FeedbackForm/feedbackform.component';
import { ServiceComponent } from './Component/service/service.component';
import { ComplainComponent } from './Component/complain/complain.component';
import { SignupComponent } from './Component/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    FeedbackformComponent,
    ServiceComponent,
    ComplainComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(TestData)

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
