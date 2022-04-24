import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantOpinion } from 'src/app/models/restaurantOpinion';
import { RestaurantCommentService } from 'src/app/services/restaurant-comment.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  restaurant:Restaurant={city:"",establishment:"",id:1,name:"",town:"",type:"",userId:1}
  restaurantOpinions:RestaurantOpinion[]= []
  constructor(private activatedRoute:ActivatedRoute,private restaurantService:RestaurantService,private restaurantOpinionService:RestaurantCommentService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{

      this.getRestaurantDetail(params["id"])
      this.getRestaurantComment(params["id"])
    })
  }

  getRestaurantDetail(id:number){
    this.restaurantService.getById(id).subscribe(response=>{
      this.restaurant = response.data
    })
  }
  getRestaurantComment(id:number){

    this.restaurantOpinionService.getById(id).subscribe(response=>{
      this.restaurantOpinions = response.data;

    })
  }
}
