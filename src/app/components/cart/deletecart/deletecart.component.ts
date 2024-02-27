import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-deletecart',
  templateUrl: './deletecart.component.html',
  styleUrls: ['./deletecart.component.css']
})
export class DeletecartComponent implements OnInit {

  constructor(private route:ActivatedRoute, private cartService:CartService, private router:Router) { }

  cartItemId:number;
  customerId:string;
  
  ngOnInit(): void {
    let bool=false;
    this.cartItemId=this.route.snapshot.params['cartItemId'];
    console.log(this.cartItemId);
    this.cartService.deleteCartItem(this.cartItemId).subscribe(m=>bool=m);
    this.router.navigate(['/viewcart,this.customerId'])
  }

}
