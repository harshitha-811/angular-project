import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';
import { CustomerService } from 'src/app/services/customer.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  num:number;
  cart:Cart=new Cart();
  cartItems:Cart[]=[];
  customerEmail=localStorage.getItem('token');

  constructor(private cartService:CartService, private customerService:CustomerService, private route:Router, private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.addToCart(this.cart);
    this.viewCart();
  }
  
  addToCart(cart:Cart){
    
   cart.customerId=this.customerEmail;
   this.cart.productId=parseInt(localStorage.getItem('productId'));
   cart.quantity=1;
   this.cartService.addCartItem(cart).subscribe(m=>cart=m);
   this.route.navigate(['/proddetails',this.cart.productId]);
  }
  viewCart(){
    this.cartService.viewCartByCustomerId(this.customerEmail)
    .subscribe(m=>this.cartItems=m);
  }
  
  }

