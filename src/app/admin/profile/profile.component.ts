import { Component, OnInit } from '@angular/core';
import { Profiles } from 'src/app/_models/profile';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profile : Profiles
  constructor(
    private account : AccountService
  ) { }
  
  ngOnInit() {
    this.getProfile()
  }
  getProfile(){
    this.account.getProfile().subscribe(data=>{
      this.profile = data["profile"]
      console.log(data)
    })}
  // addAccount(){
  //   this.account.addAccount()
  // }
  editUser(){

  }
}
