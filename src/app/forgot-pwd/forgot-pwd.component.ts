import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResAuthService } from '../res-auth.service';
import { UserAutService } from '../user-aut.service';

@Component({
  selector: 'app-forgot-pwd',
  templateUrl: './forgot-pwd.component.html',
  styleUrls: ['./forgot-pwd.component.css']
})
export class ForgotPwdComponent implements OnInit {


  repwd:string=""
  email:string=""
  selec:string=""
  pwd:string=""
  secQues:string=""
  secAnswer=""
  constructor(private router:Router, private userAuth:UserAutService,private resAuth:ResAuthService) { }

  ngOnInit(): void {
  }
  changePwd(){
    console.log("beforee");
    
    if(this.selec=="user"){
      console.log((0));
      for(var x=0;x<this.userAuth.users.length;x++){
        if(this.userAuth.users[x].email==this.email){
         // console.log("1" );
         // console.log(this.secQues);
         // console.log(this.userAuth.users[x].securityQuestion);
          if(this.userAuth.users[x].securityQuestion==this.secQues){
           // console.log((2));
            if(this.userAuth.users[x].securityAnswer==this.secAnswer){
             // console.log((3));
              if(this.pwd==this.repwd){
               // console.log((4));
                this.userAuth.users[x].password=this.pwd              
               // console.log("after change");              
                console.log(this.userAuth.users);              
                this.router.navigateByUrl("/login")
              }else{
                alert("password mismatch")
              }
            }            
          }
          break;
        }
      }
    }else{
      for(var x=0;x<this.resAuth.restaurants.length;x++){
        if(this.resAuth.restaurants[x].resEmail==this.email){
          if(this.resAuth.restaurants[x].resSecurityQuestion==this.secQues && this.resAuth.restaurants[x].resSecurityAnswer==this.secAnswer){
            if(this.pwd==this.repwd){
              this.resAuth.restaurants[x].resPwd=this.pwd
              this.router.navigateByUrl("/login")
            }else{
              alert("password mismatch")
            }
          }
        }else{
          alert("Restaurant not found")
        }
      }
    }
  }

}
