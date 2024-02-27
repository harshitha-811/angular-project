import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }
  
  signup(customer:Customer):Observable<string>{
    return this.http.post<string>('http://localhost:8081/customers/signup',customer,{responseType:'text' as 'json'});
  }
  login(customer:Customer):Observable<boolean>{
    return this.http.post<boolean>('http://localhost:8081/customers/login',customer);
  }
  getCustByEmail(customerEmail:string):Observable<number>{
    return this.http.get<number>('http://localhost:8081/customers/byemail/'+customerEmail);
  }
  getCustomerByEmail(customerEmail:string):Observable<Customer>{
    return this.http.get<Customer>('http://localhost:8081/customers/customer/'+customerEmail)
  }
  
}
