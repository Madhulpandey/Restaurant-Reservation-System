import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAutService } from '../user-aut.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:UserAutService,private router:Router) { }
  mail:string=""
  pwd:string=""

  ngOnInit(): void {
  }
  login(){
    this.auth.login(this.mail,this.pwd)
    //this.router.navigateByUrl("/userHP")
  }

}
