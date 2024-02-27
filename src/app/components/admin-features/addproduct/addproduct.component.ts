import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  productForm:FormGroup;

  product:Product=new Product;

  message:string;

  constructor(private fb:FormBuilder, private productService:ProductService,private router:Router) { }
  
  ngOnInit(): void {
    this.initForm();
  }


  private initForm(){
    this.productForm=this.fb.group({
      productName:[,[Validators.required,Validators.minLength(3)]],
      description:[,[Validators.required]],
      price:[,Validators.required],
      imageUrl:[,[Validators.required]],  
    });
  }
  onSubmit(){
    console.log(this.productForm);
    this.product=this.productForm.value;
    this.productService.addProduct(this.product)
    .subscribe(m=>{
      if(m){
        this.router.navigate(['modifyprod']);
      }
      this.message="The product already exists"
    })

  }
}
