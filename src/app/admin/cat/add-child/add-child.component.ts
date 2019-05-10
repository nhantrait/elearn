import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/_services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-child',
  templateUrl: './add-child.component.html',
  styleUrls: ['./add-child.component.css']
})
export class AddChildComponent implements OnInit {
  url : string 
  id : string
  name : string
  parent : string
  constructor(
    private cat : CategoryService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(data=>{
      this.id = data.get("id1")
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
