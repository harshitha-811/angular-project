import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {

  customerEmail:string;
  customer:Customer=new Customer();
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.customerEmail=localStorage.getItem('token');
    this.viewcustomerDetails();
  }
  viewcustomerDetails(){
    this.customerService.getCustomerByEmail(this.customerEmail).subscribe(m=>this.customer=m);
  }
  editPassword(){
    
  }

}
