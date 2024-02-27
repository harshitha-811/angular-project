import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { Product } from 'src/app/models/product';
import { CustomerService } from 'src/app/services/customer.service';
import { ProductService } from 'src/app/services/product.service';
import { CartComponent } from '../cart/cart/cart.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  alert:boolean;
  
  constructor(private snackbar:MatSnackBar,private activatedroute:ActivatedRoute, private productService:ProductService, private customerService:CustomerService, private route:Router) { }

  product:Product=new Product();
  ngOnInit(): void {
    let productId=this.activatedroute.snapshot.params['productId'];
    this.productService.getProduct(productId).subscribe(p=>this.product=p);
    localStorage.setItem('productId',productId);
    
  }
  
  isLoggedIn(){
    if(localStorage.getItem('token')){
      this.openSnackBar("this product is added to your cart","ok")
      this.route.navigate(['/cart']);
    }
    else{
     window.alert("Please login to add a product to cart");
     this.route.navigate(['/login']);
    }
  }
  openSnackBar(message:string, action:string) {
    // this.snackBar.openFromComponent(PizzaPartyComponent, {
    //   duration: 500,
    // });
    this.snackbar.open(message, action,
      {
        duration:1000
      });
    }
}
