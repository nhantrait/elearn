import { Component } from '@angular/core';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private account : AccountService
  ){}
  isLogin(){
   if(localStorage.getItem('token') != null){
     return true;
   }
   else return false;
}
}
