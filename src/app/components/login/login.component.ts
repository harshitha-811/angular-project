import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private customerService:CustomerService, private fb:FormBuilder,private router:Router) { }
  customerForm:FormGroup;
  customer:Customer=new Customer();
  message:string;
  value:boolean;
  

  ngOnInit(): void {
    this.initForm();
  }
  private initForm(){
    this.customerForm=this.fb.group({
      customerEmail:['',[Validators.required,Validators.pattern("^\\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$")]],
      customerPassword:['',[Validators.required,Validators.pattern("^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$")]],
    });
  }
  onSubmit(){
    this.customer=this.customerForm.value;
    this.customerService.login(this.customer)
    .subscribe(m=>{this.value=m;
      if(this.value){
        this.router.navigate(['']);
      localStorage.setItem('token',this.customer.customerEmail);
      }
      this.message="Invalid User"
      
    })
    
}
}
