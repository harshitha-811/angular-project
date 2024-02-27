import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {

  productId:number;
  isDeleted:boolean;
  constructor(private productService:ProductService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.productId=this.route.snapshot.params['productId'];
    this.productService.deleteProduct(this.productId)
    .subscribe(data=>{
      this.isDeleted=data;
      if(this.isDeleted){
        this.router.navigate(['/modifyprod']);
      }
    })
  }

}
