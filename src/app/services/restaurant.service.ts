import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from '../models/restaurant';
import { ListResponseModel } from './../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  restaurants:Restaurant[]=[]

  apiUrl = "https://localhost:44345/api/restaurants/"
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<ListResponseModel<Restaurant>>{
    return this.httpClient.get<ListResponseModel<Restaurant>>(this.apiUrl+"getall")
  }
  add(restaurant:Restaurant):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",restaurant)
  }
  delete(restaurant:Restaurant):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"delete",restaurant)
  }
  update(restaurant:Restaurant):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"update",restaurant)
  }
  getById(id:number):Observable<SingleResponseModel<Restaurant>>{
    return this.httpClient.get<SingleResponseModel<Restaurant>>(this.apiUrl+"getbyid?id="+id);
  }


}
