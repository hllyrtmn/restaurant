import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  restaurants:Restaurant[] = [];
  restaurant:Restaurant = {city : "",establishment:"",name:"",town:"",type:"",id:1,userId:1}
  filterText = '';
  dateTime:Date = new Date()
  constructor(private restaurantService:RestaurantService) { }

  ngOnInit(): void {
    this.getAll()
    this.dateTime.getTime
  }

  getAll(){
    this.restaurantService.getAll().subscribe(response=>{
      this.restaurants = response.data;
      this.restaurant = this.restaurants[Math.floor(Math.random()*this.restaurants.length)]

    })
  }

}
