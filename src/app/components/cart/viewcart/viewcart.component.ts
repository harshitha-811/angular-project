import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { ProductInCart } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {

  constructor(private cartService:CartService, private productService:ProductService) { }

  customerEmail=localStorage.getItem('token');
  cartItems:Cart[]=[];
  products:ProductInCart[]=[];
  ids:number[]=[];
  
  ngOnInit(): void {
    this.viewCart();
    this.prodDetails();
  }

  viewCart(){
    this.cartService.viewCartByCustomerId(this.customerEmail)
    .subscribe(m=>this.cartItems=m);
      
  }
  prodDetails(){
    // for (let index = 0; index < this.cartItems.length; index++) {
    //   const cartItem = this.cartItems[index];
    //   let id= cartItem.productId;
    //   this.productService.getProduct(id).subscribe(m=>{
    //     this.products.push(m);
    //   });
    
    // }
  }
  view(){
    for (let index = 0; index < this.cartItems.length; index++) {
      const cartItem = this.cartItems[index];
      this.ids.push(cartItem.productId);      
    }
    console.log(this.ids);
    var idsSet=new Set(this.ids);
    console.log(idsSet);
    for (let index = 0; index < idsSet.size; index++) {
            
    }
  }
  
}
