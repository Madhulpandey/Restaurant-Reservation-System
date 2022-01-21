import { Injectable } from '@angular/core';
import { Restaurant } from './model/restaurant';

@Injectable({
  providedIn: 'root'
})
export class ResAuthService {

  restaurants:Restaurant[]=[]
  loggedRest:Restaurant=new Restaurant
  constructor() { }

  registerRestaurant(r:Restaurant){
    this.restaurants.push(r)
    console.log(this.restaurants);
     
  }
  logRestaurant(e:string,p:string){
    let x=0
    for(x=0;x<this.restaurants.length;x++){
      if(this.restaurants[x].resEmail==e && this.restaurants[x].resPwd==p){
        this.loggedRest=this.restaurants[x]
      }
    }
  }
}
