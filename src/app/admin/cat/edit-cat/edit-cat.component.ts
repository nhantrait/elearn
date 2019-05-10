import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/_services/category.service';
import { Categories } from 'src/app/_models/category';

@Component({
  selector: 'app-edit-cat',
  templateUrl: './edit-cat.component.html',
  styleUrls: ['./edit-cat.component.css']
})
export class EditCatComponent implements OnInit {
  name : string
  id : string
  category : Categories
  constructor(
    private route : ActivatedRoute,
    private cat : CategoryService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(data=>{
      this.id = data.get("id")
    })
    this.getCat(this.id)
  }
  editCat(){
    this.cat.editCat(this.id,this.category.name).subscribe(data=>{
      if(data["success"] == true){
        alert("Edit Success")
        window.history.back()
      }
    })
  }
  getCat(id){
    this.cat.getCat(id).subscribe(data=>{
      this.category = data["category"]
    })
  }
}
