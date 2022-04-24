import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  closeResult: string = '';
  restaurantAddForm!: FormGroup;
  restaurantUpdateForm!:FormGroup;
  userId!:number
  restaurants:Restaurant[] = []
  restaurant:Restaurant = {id:1,city:"",establishment:"",name:"",town:"",type:"",userId:1};
  restaurantUpdate:Restaurant = {id:1,city:"",establishment:"",name:"",town:"",type:"",userId:1};
  constructor(private restaurantService: RestaurantService,private modalService: NgbModal,private formBuilder:FormBuilder,private toasterService:ToastrService) {
  }



  ngOnInit(): void {
    this.getAll();
    this.createRestaurantAddForm();
  }

  getAll(){
    this.restaurantService.getAll().subscribe(response=>{
      this.restaurants = response.data
    })
  }

  openVerticallyCentered(content:any) {
    this.modalService.open(content, { centered: true });
  }
  createRestaurantAddForm(){
    this.restaurantAddForm = this.formBuilder.group({
      name:['',Validators.required],
      type:['',Validators.required],
      city:['',Validators.required],
      town:['',Validators.required],
      establishment:['',Validators.required],
      userId:[1]
    })
  }
  createRestaurantUpdateForm(){
    this.restaurantUpdateForm = this.formBuilder.group({
      id:[this.restaurant.id],
      name:[this.restaurant.name],
      type:[this.restaurant.type],
      city:[this.restaurant.city],
      town:[this.restaurant.town],
      establishment:[this.restaurant.establishment],
      userId:[1]
    })
  }
  update(){
    if(this.restaurantAddForm.valid){
      let restaurantModel = Object.assign({},this.restaurantAddForm.value)
      this.restaurant = restaurantModel
      this.restaurantUpdate = restaurantModel

      this.restaurantUpdate.id = this.userId
      this.restaurantService.update(this.restaurantUpdate).subscribe(response=>{
        this.toasterService.success(response.message,"Başarılı")
        this.modalService.dismissAll()
      })
    }
  }
  delete(id:number){
    var res = this.restaurants.find(r=>{return r.id==id})
    console.log(res)
    this.restaurant = Object.assign({},res)
    this.restaurantService.delete(this.restaurant).subscribe(response=>{
      this.toasterService.success(response.message,"Başarılı")

    })
  }
  add(){
    if(this.restaurantAddForm.valid){
      let restaurantModel = Object.assign({},this.restaurantAddForm.value)
      this.restaurantService.add(restaurantModel).subscribe(response=>{
        this.toasterService.success(response.message,"Başarılı")
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for(let i = 0;i<responseError.error.Errors.length;i++){
            this.toasterService.error(responseError.error.Errors[i].ErrorMessage,"Hata")
          }
        }
      })

  }else{
    this.toasterService.error("İlk Hata","Hata")

  }
}
updateModalForm(id:number,content:any){
  this.modalService.open(content, { centered: true });
  var res = this.restaurants.find(r=>{return r.id==id})
  this.restaurant = Object.assign({},res)
  this.userId  = this.restaurant.id
  console.log(this.restaurantUpdate)
  this.createRestaurantAddForm()

}


}




