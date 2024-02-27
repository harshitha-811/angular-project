import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-modifyproducts',
  templateUrl: './modifyproducts.component.html',
  styleUrls: ['./modifyproducts.component.css']
})
export class ModifyproductsComponent implements OnInit {

  constructor(private productService:ProductService) { }

  products:Product[]=[];
  ngOnInit(): void {
    this.productService.viewProduct().subscribe(m=>this.products=m);
  }

}
