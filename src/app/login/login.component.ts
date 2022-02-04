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
    console.log(this.uAuth.users);
    if(this.selec=="user"){
      //console.log(this.auth.signedInUser);      
      //this.uAuth.login(this.mail,this.pwd)
      for(var x=0;x<this.uAuth.users.length;x++){
        if(this.uAuth.users[x].email==this.mail && this.uAuth.users[x].password==this.pwd){
          this.uAuth.signedInUser=this.uAuth.users[x]
          this.router.navigateByUrl("/userHP")   
        }
      }
      // if(this.uAuth.signedInUser.email==this.mail){
      //  this.router.navigateByUrl("/userHP")
      // }      
    }else{
      this.rAuth.logRestaurant(this.mail,this.pwd)
      if(this.rAuth.loggedRest.resEmail==this.mail){
        this.router.navigateByUrl("/resHP")
      }
    }  
  }
  forgotPwd(){
    this.router.navigateByUrl("/forgotPWD")
    console.log(this.uAuth.users);
        
  }

}
