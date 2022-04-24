import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';

const routes: Routes = [
  { path: '',pathMatch:'full', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  {path:'restaurant-detail/:id',component:RestaurantDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
