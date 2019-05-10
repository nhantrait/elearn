import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/_services/category.service';
import { ActivatedRoute } from '@angular/router';
import { Categories } from 'src/app/_models/category';

@Component({
  selector: 'app-edit-cat-child',
  templateUrl: './edit-cat-child.component.html',
  styleUrls: ['./edit-cat-child.component.css']
})
export class EditCatChildComponent implements OnInit {
  id : string
  name : string
  category : Categories
  constructor(
    private cat : CategoryService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(data=>{
      this.id = data.get("idchild")
      console.log(this.id)
    })
    this.getCatChild(this.id)
  }
  editCatChild(){
    this.cat.editCatChild(this.category.parent,this.category._id,this.category.name).subscribe(data=>{
      console.log(this.category.parent)
      if(data["success"] == true){
        alert("Edit Success")
        window.history.back()
      }
    })
  }
  getCatChild(id){
    this.cat.getCat(id).subscribe(data=>{
      this.category = data["category"]
    })
  }

}
