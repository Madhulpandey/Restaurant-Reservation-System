import { Injectable } from '@angular/core';
import { Restaurant } from './model/restaurant';

@Injectable({
  providedIn: 'root'
})
export class ResAuthService {

  restaurants:Restaurant[]=[]
  loggedRest:Restaurant=new Restaurant
  constructor() {
    this.restaurants.push({resName:"trial1",resArea:"trial1",resEmail:"tri@al1.com",resPwd:"tri1",resType:"lala"})
    this.restaurants.push({resName:"trial2",resArea:"trial2",resEmail:"tri@al2.com",resPwd:"tri2",resType:"lala"})
    this.restaurants.push({resName:"trial3",resArea:"trial3",resEmail:"tri@al3.com",resPwd:"tri3",resType:"lala"})
   }

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
