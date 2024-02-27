import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  viewProduct():Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:8082/products')
  }
  getProduct(id:number):Observable<Product>{
    return this.http.get<Product>('http://localhost:8082/products/'+id)
  }
  deleteProduct(id:number):Observable<boolean>{
    return this.http.delete<boolean>('http://localhost:8082/products/delete/'+id)
  }
  addProduct(product:Product):Observable<Boolean>{
    return this.http.post<boolean>('http://localhost:8082/products/add',product)
  }
}
