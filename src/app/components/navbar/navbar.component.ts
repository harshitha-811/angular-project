import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn:boolean;
  user:string;
  customerId:string;
  constructor() { }

  ngOnInit(): void {
    this.customerId=localStorage.getItem('token');
  }
  isLoggedIn():boolean{
    if(localStorage.getItem('token')){
      return true;
    }
    else{
     return false;
    }
  }
  isAdmin():boolean{
    if(localStorage.getItem('token')=="admin@gmail.com"){
      return true;
    }
    return false;
  }


}
