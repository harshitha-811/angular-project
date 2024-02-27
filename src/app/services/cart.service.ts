import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  addCartItem(cartitem:Cart):Observable<Cart>{
    return this.http.post<Cart>("http://localhost:8083/cartitem/add",cartitem);
  }
  viewCartByCustomerId(customerId:string):Observable<Cart[]>{
    return this.http.get<Cart[]>("http://localhost:8083/cartitem/items/"+customerId);
  }
  deleteCartItem(cartItemId:number):Observable<boolean>{
    return this.http.delete<boolean>("http://localhost:8083/cartitem/delete/"+cartItemId);
  }
  deleteAll():Observable<any>{
    return this.http.delete("http://localhost:8083/cartitem/deleteall");
  }

}
