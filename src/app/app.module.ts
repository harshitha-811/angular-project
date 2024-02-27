import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './components/logout/logout.component';
import { ModifyproductsComponent } from './components/modifyproducts/modifyproducts.component';
import { AddproductComponent } from './components/admin-features/addproduct/addproduct.component';
import { UpdateproductComponent } from './components/admin-features/updateproduct/updateproduct.component';
import { DeleteproductComponent } from './components/admin-features/deleteproduct/deleteproduct.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { CartComponent } from './components/cart/cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ViewcartComponent } from './components/cart/viewcart/viewcart.component';
import { DeletecartComponent } from './components/cart/deletecart/deletecart.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PasswordPipe } from './components/pipes/password.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    LogoutComponent,
    ModifyproductsComponent,
    AddproductComponent,
    UpdateproductComponent,
    DeleteproductComponent,
    ProductdetailsComponent,
    CartComponent,
    ViewcartComponent,
    DeletecartComponent,
    ProfileComponent,
    PasswordPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
