import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResAuthService } from '../res-auth.service';
import { UserAutService } from '../user-aut.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private uAuth:UserAutService,private router:Router,private rAuth:ResAuthService) { }
  mail:string=""
  pwd:string=""
  selec:any=""
  rePwd:string=""

  ngOnInit(): void {
  }
  login(){
    console.log(this.selec);
    if(this.selec=="user"){
      //console.log(this.auth.signedInUser);      
      this.uAuth.login(this.mail,this.pwd)
      if(this.uAuth.signedInUser.email==this.mail){
        this.router.navigateByUrl("/userHP")
      }      
    }else{
      this.rAuth.logRestaurant(this.mail,this.pwd)
      if(this.rAuth.loggedRest.resEmail==this.mail){
        this.router.navigateByUrl("/resHP")
      }
    }
    
    
  }

}
