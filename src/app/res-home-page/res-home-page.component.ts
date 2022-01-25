import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router:Router,private restAuth:ResAuthService,private reserveAuth:ReservDBService,private userAuth:UserAutService) 
  { 
    this.reservations=this.reserveAuth.reservations
  }

  ngOnInit(): void {
  }
  remove(r:Reservation){
    var ind=this.reserveAuth.reservations.indexOf(r)
    this.reserveAuth.reservations.splice(ind,1)
    
  }
  quit(){
    this.router.navigateByUrl("/login")
  }

}
