import { Injectable } from '@angular/core';
import { Reservation } from './model/reservation';
import { Restaurant } from './model/restaurant';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class ReservDBService {

  reservations:Reservation[]=[]
  constructor() { }
  makeReservaion(u:User,res:Restaurant){
    console.log("Reservation Made")
    this.reservations.push({user:u , restaurant:res})
  }
}
