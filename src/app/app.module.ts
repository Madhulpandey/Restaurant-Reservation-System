import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegUserComponent } from './reg-user/reg-user.component';
import { RegResComponent } from './reg-res/reg-res.component';
import { LoginComponent } from './login/login.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { ResHomePageComponent } from './res-home-page/res-home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    RegUserComponent,
    RegResComponent,
    LoginComponent,
    UserHomePageComponent,
    ResHomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
