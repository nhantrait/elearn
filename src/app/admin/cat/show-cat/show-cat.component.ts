import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/_models/category';
import { CategoryService } from 'src/app/_services/category.service';

@Component({
  selector: 'app-show-cat',
  templateUrl: './show-cat.component.html',
  styleUrls: ['./show-cat.component.css']
})
export class ShowCatComponent implements OnInit {
  public categories : Categories
  constructor(
    public category : CategoryService
  ) { }

  ngOnInit() {
    this.getAllCat()
  }
  getAllCat(){
    this.category.show().subscribe(
      data=>{
        this.categories = data["categories"]
      }
    )
  } 
  deleteCat(id){
    this.category.deleteCat(id).subscribe(data=>{
      if(data["success"] == true){
        alert("Delete Success")
        this.getAllCat()
      }
    },error=>{
      console.log(error);
    })
  }

}
