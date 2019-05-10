import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/_models/category';
import { CategoryService } from 'src/app/_services/category.service';
import { AccountService } from 'src/app/_services/account.service';
import { Profiles } from 'src/app/_models/profile';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public categories : Categories
  public profiles : Profiles
  constructor(
    public category : CategoryService,
    public profile : AccountService
  ) { }

  ngOnInit() {
    if(localStorage.getItem("token")==null&&window.location.pathname!="/login"){
      window.location.href="/login";
    }
    
    this.category.show().subscribe(
      data=>{
        this.categories = data["categories"]
      }
    )
    this.getProfile();
  }
  getProfile(){
    this.profile.getProfile().subscribe(data=>{
      this.profile = data["profile"]
      console.log(data)
    }
      )
  }
  logOut(){
    localStorage.removeItem('token');
    window.location.reload()
  }
}
