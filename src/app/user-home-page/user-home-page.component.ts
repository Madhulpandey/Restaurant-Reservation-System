import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from '../model/reservation';
import { Restaurant } from '../model/restaurant';
import { User } from '../model/user';
import { ResAuthService } from '../res-auth.service';
import { ReservDBService } from '../reserv-db.service';
import { UserAutService } from '../user-aut.service';

@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.css']
})
export class UserHomePageComponent implements OnInit {

  restaurants:Restaurant[]=[];
  date:Date=new Date
  res:Reservation=new Reservation
  reservations:Reservation[]=[]
  user:User
  constructor(private router:Router,private userAuth:UserAutService,private resAuth:ResAuthService,private reserveDB:ReservDBService) { 
    this.restaurants=this.resAuth.restaurants
    this.user=userAuth.signedInUser
  }

  ngOnInit(): void {  
    this.reservations=this.reserveDB.reservations.sort((a,b) =>(a.date>b.date)?-1:1)
  }
  reserve(r:Restaurant){
    this.res.restaurant=r
    this.res.date=this.date
    this.res.user=this.userAuth.signedInUser
    this.reserveDB.makeReservaion(this.res)
    console.log(this.reserveDB.reservations);
    this.res=new Reservation
  
  }

  quit(){
    this.router.navigateByUrl("/login")
  }
  cancel(r:Reservation){
    var ind=this.reserveDB.reservations.indexOf(r)
    this.reserveDB.reservations.splice(ind,1)
  }
}
