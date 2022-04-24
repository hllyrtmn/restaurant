import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { RestaurantComponent } from './components/home/restaurant/restaurant.component';
import { MenuComponent } from './components/home/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterTypePipe } from './pipes/filter-type.pipe';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    RestaurantComponent,
    MenuComponent,
    FilterTypePipe,
    AdminComponent,
    RestaurantDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ToastrModule.forRoot({
      positionClass: "toast-top-right"
  }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
