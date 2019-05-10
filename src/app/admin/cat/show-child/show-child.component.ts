import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/_services/category.service';
import { ActivatedRoute } from '@angular/router';
import { Categories } from 'src/app/_models/category';

@Component({
  selector: 'app-show-child',
  templateUrl: './show-child.component.html',
  styleUrls: ['./show-child.component.css']
})
export class ShowChildComponent implements OnInit {
  url : string
  id : string 
  name : string
  Categories : Categories
  constructor(
    private cat : CategoryService,
    private route : ActivatedRoute
    ) { }

  ngOnInit() {
    this.url = window.location.pathname
    this.route.paramMap.subscribe(data=>{
      this.id = data.get("id1")
    })
    this.getCatChild(this.id)
  }
  getCatChild(id){
    this.cat.getCatChild(id).subscribe(data=>{
      this.Categories = data["children"]
      console.log(this.Categories)
    })
  }
  deleteCatChild(id){
    this.cat.deleteCat(id).subscribe(data=>{
      if(data["success"] == true){
        alert("Delete Success")
        window.location.reload()
      }
    },error=>{
      console.log(error);
    })
  }
}
