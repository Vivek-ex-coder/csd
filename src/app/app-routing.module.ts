import { LoginComponent } from './Component/Login/login.component';
import { HomeComponent } from './Component/Home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'home',component: HomeComponent
  },{
    path:'login',component: LoginComponent
  },{
    path:'**',component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
