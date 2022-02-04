import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class UserAutService {
  users:User[]=[]
  signedInUser:User={firstName:"",lastName:"",address:"",email:"lol",password:"",securityAnswer:"",securityQuestion:""};
  constructor(private http:HttpClient) {  }
  

  register(u:User){
    this.users.push(u)  
    console.log(this.users); 
    //this.http.post('http://localhost:3000/customer/',u)
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
