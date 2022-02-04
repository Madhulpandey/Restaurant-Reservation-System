import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';
import { LoginComponent } from './login/login.component';
import { RegResComponent } from './reg-res/reg-res.component';
import { RegUserComponent } from './reg-user/reg-user.component';
import { ResHomePageComponent } from './res-home-page/res-home-page.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';

const routes: Routes = [
  {path:'regUser' , component:RegUserComponent},
  {path:'regRes',component:RegResComponent},
  {path:'login',component:LoginComponent},
  {path:'userHP',component:UserHomePageComponent},
  {path:'resHP',component:ResHomePageComponent},
  {path:'forgotPWD',component:ForgotPwdComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
