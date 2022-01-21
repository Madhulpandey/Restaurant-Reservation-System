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
  constructor(private authRes:ResAuthService) { }

  ngOnInit(): void {
  }
  registerRest(){
    this.authRes.registerRestaurant(this.rest)
  }
}
