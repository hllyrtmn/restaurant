import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { RestaurantOpinion } from '../models/restaurantOpinion';

@Injectable({
  providedIn: 'root'
})
export class RestaurantCommentService {

  apiUrl = "https://localhost:44345/api/restaurantopinions/"
  constructor(private httpClient:HttpClient) { }

  getById(id:number):Observable<ListResponseModel<RestaurantOpinion>>{
    console.log(id+"servis")
    return this.httpClient.get<ListResponseModel<RestaurantOpinion>>(this.apiUrl+"getbyid?id="+id);

  }
}
