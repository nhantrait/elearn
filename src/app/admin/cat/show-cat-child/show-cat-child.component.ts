import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/_services/category.service';
import { Categories } from 'src/app/_models/category';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-cat-child',
  templateUrl: './show-cat-child.component.html',
  styleUrls: ['./show-cat-child.component.css']
})
export class ShowCatChildComponent implements OnInit {
  url : string
  id : string
  Categories  : Categories
  constructor(
    private cat : CategoryService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.url = window.location.pathname
    this.route.paramMap.subscribe(data=>{
      this.id = data.get("id")
    })
    this.getCatChild(this.id)
  }
  getCatChild(id){
    this.cat.getCatChild(id).subscribe(data=>{
      this.Categories = data["children"]
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
