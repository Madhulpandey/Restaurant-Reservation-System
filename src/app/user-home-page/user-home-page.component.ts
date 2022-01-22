import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import { ResAuthService } from '../res-auth.service';

@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.css']
})
export class UserHomePageComponent implements OnInit {

  restaurants:Restaurant[]=[];
  constructor(private resAuth:ResAuthService) { 
    this.restaurants=this.resAuth.restaurants
  }

  ngOnInit(): void {
  }
  reserve(){
    
  }

}
