import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:string;
  constructor() { }
  isAdmin():string{
    if(localStorage.getItem('token')=="admin@gmail.com"){
      return "admin";
    }
    return "user";
  }
  
}
