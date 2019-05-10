import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/_services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-cat-child',
  templateUrl: './add-cat-child.component.html',
  styleUrls: ['./add-cat-child.component.css']
})
export class AddCatChildComponent implements OnInit {
  name : string
  parent : string
  id : string
  constructor(
    private cat : CategoryService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(data=>{
      this.id = data.get("id")
    })
    this.parent = this.id
  }
  addCat(){
    this.cat.addCatChild(this.parent,this.name).subscribe(data=>{
      if(data["success"] == true){
        alert("Add Success")
        window.history.back()
      }
    })
  }
}
