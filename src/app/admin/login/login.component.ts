import { Component, OnInit } from '@angular/core';
import {AccountService } from './../../_services/account.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  constructor(
    public accountService:AccountService
  ) { }

  ngOnInit() {
  }
  SignIn(){
      this.accountService.login(this.username,this.password).subscribe(data=>{
        console.log(data);
        if(data!=null){
          localStorage.setItem("token",data.token);
           this.accountService.getProfile().subscribe(data=>{
             console.log(data);
           });
           window.location.href = '';
        }
      })
      
  }
}
