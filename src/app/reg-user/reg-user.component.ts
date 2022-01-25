import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { UserAutService } from '../user-aut.service';

@Component({
  selector: 'app-reg-user',
  templateUrl: './reg-user.component.html',
  styleUrls: ['./reg-user.component.css']
})
export class RegUserComponent implements OnInit {

  constructor(private auth:UserAutService) { }
  user:User=new User
  repass:string=""
  ngOnInit(): void {
    
  }
  register(){
    if(this.repass==this.user.password){
      this.auth.register(this.user)
      
    }else{
      alert("password mismatch")
      
    }
    
  }

}
