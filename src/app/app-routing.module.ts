import { LoginComponent} from './Component/login/login.component';
import { HomeComponent } from './Component/home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedbackformComponent } from './Component/FeedbackForm/feedbackform.component';
import { ServiceComponent } from './Component/service/service.component';
import { ComplainComponent } from './Component/complain/complain.component';

const routes: Routes = [
  {
    path:'home',component: HomeComponent
  },{
    path:'login',component: LoginComponent
  },{
    path:'feedback',component: FeedbackformComponent
  },{
    path:'service',component:ServiceComponent
  },{
    path:'complain',component:ComplainComponent
  },{
    path:'**',component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
