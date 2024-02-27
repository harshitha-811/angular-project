import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  productForm:FormGroup;

  product:Product=new Product;

  message:string;

  
  constructor(private fb:FormBuilder, private productService:ProductService,private router:Router,private activatedRoute:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.initForm();
  }
  private initForm(){
    let id=this.activatedRoute.snapshot.params['productId'];
    this.productService.getProduct(id).subscribe(m=>{
    this.product=m
    this.productForm=this.fb.group({
      productId:[id],
      productName:[this.product.productName,[Validators.required,Validators.minLength(3)]],
      description:[this.product.description,[Validators.required]],
      price:[this.product.price,Validators.required],
      imageUrl:[this.product.imageUrl,[Validators.required]],  
      });
  })}
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
