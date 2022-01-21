import { Injectable } from '@angular/core';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class UserAutService {

  //firstName:string
  // lastName:string
  // email:string
  // password:string
  // address:string
  users:User[]=[]
  signedInUser:User={firstName:"",lastName:"",address:"",email:"lol",password:""};
  constructor() {  }
  register(u:User){
    this.users.push(u)  
    console.log(this.users); 
  }
  login(e:string,p:string){
    let x=0
    for(x=0;x<this.users.length;x++){
      if(this.users[x].email==e && this.users[x].password==p){
        //alert("logged in")
        this.signedInUser=this.users[x]
      }
    }
  }

}
