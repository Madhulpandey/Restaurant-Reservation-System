import { Component, OnInit } from '@angular/core';
import { Reservation } from '../model/reservation';
import { User } from '../model/user';
import { ResAuthService } from '../res-auth.service';
import { ReservDBService } from '../reserv-db.service';
import { UserAutService } from '../user-aut.service';

@Component({
  selector: 'app-res-home-page',
  templateUrl: './res-home-page.component.html',
  styleUrls: ['./res-home-page.component.css']
})
export class ResHomePageComponent implements OnInit {

  usersReserved:User[]=[]
  reservations:Reservation[]=[]
  logRes=this.restAuth.loggedRest
  constructor(private restAuth:ResAuthService,private reserveAuth:ReservDBService,private userAuth:UserAutService) 
  { 
    this.reservations=this.reserveAuth.reservations
  }

  ngOnInit(): void {
    // for(let x=0;x<this.reserveAuth.reservations.length;x--){
    //   if(this.restAuth.loggedRest==this.reserveAuth.reservations[x].restaurant){
    //     this.usersReserved.push(this.reserveAuth.reservations[x].user)
    //   }
    // }
  }

}
