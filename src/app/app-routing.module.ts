import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ModifyproductsComponent } from './components/modifyproducts/modifyproducts.component';
import { AddproductComponent } from './components/admin-features/addproduct/addproduct.component';
import { UpdateproductComponent } from './components/admin-features/updateproduct/updateproduct.component';
import { DeleteproductComponent } from './components/admin-features/deleteproduct/deleteproduct.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { CartComponent } from './components/cart/cart/cart.component';
import { ViewcartComponent } from './components/cart/viewcart/viewcart.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DeletecartComponent } from './components/cart/deletecart/deletecart.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"logout",component:LogoutComponent},
  {path:"modifyprod",component:ModifyproductsComponent},
  {path:"addprod",component:AddproductComponent},
  {path:"updateprod/:productId",component:UpdateproductComponent},
  {path:"deleteprod/:productId",component:DeleteproductComponent},
  {path:"proddetails/:productId",component:ProductdetailsComponent},
  {path:"cart",component:CartComponent},
  {path:"viewcart/:customerId",component:ViewcartComponent},
  {path:"profile",component:ProfileComponent},
  {path:"deletecart/:cartId",component:DeletecartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
