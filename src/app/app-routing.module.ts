import { LoginComponent} from './Component/Login/login.component';
import { HomeComponent } from './Component/Home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedbackformComponent } from './Component/FeedbackForm/feedbackform.component';
import { ServiceComponent } from './Component/service/service.component';
import { ComplainComponent } from './Component/complain/complain.component';
import { MenuComponent } from './Component/menu/menu.component';
import { SignupComponent } from './Component/signup/signup.component';

const routes: Routes = [
  {
    path:'home',component: HomeComponent
  },{
    path:'login',component: LoginComponent
  },{
    path:'menu',component: MenuComponent
  },{
    path:'feedback',component: FeedbackformComponent
  },{
    path:'service',component:ServiceComponent
  },{
    path:'complain',component:ComplainComponent
  },{
    path:'signup',component:SignupComponent
  },
  {
    path:'**',component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
