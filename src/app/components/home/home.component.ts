import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { Product } from 'src/app/models/product';
import { CustomerService } from 'src/app/services/customer.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  customerId:number;
  products:Product[]=[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.viewProduct().subscribe(p=>this.products=p);
    
  }

}
