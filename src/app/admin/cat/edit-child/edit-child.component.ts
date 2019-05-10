import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/_services/category.service';
import { ActivatedRoute } from '@angular/router';
import { Categories } from 'src/app/_models/category';

@Component({
  selector: 'app-edit-child',
  templateUrl: './edit-child.component.html',
  styleUrls: ['./edit-child.component.css']
})
export class EditChildComponent implements OnInit {
  id : string
  url : string
  parent : string
  category : Categories
  constructor(
    private cat : CategoryService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(data=>{
      this.id = data.get("id2")
      console.log(this.id)
    })
    this.getCatChild(this.id)
  }
  editCatChild(){
    this.cat.editCatChild(this.category.parent,this.category._id,this.category.name).subscribe(data=>{
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
