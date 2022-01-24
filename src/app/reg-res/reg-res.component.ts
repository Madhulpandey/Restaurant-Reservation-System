import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import { ResAuthService } from '../res-auth.service';

@Component({
  selector: 'app-reg-res',
  templateUrl: './reg-res.component.html',
  styleUrls: ['./reg-res.component.css']
})
export class RegResComponent implements OnInit {

  rest:Restaurant=new Restaurant
  repass:string=""
  constructor(private authRes:ResAuthService) { }

  ngOnInit(): void {
  }
  registerRest(){
    if(this.repass==this.rest.resPwd){
      this.authRes.registerRestaurant(this.rest)
    }else{
      alert("Password Mismatch")
    }
  }
}
