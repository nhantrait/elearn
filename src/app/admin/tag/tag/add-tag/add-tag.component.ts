import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Tags } from 'src/app/_models/tag';
import { TagServices } from 'src/app/_services/tags.service';
@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.css']
})
export class AddTagComponent implements OnInit {
  public name : string
  
  constructor(private http : HttpClient, public tag : TagServices) { }

  ngOnInit() {
  }
  onAddTag(){
    console.log(this.name);
    this.tag.onAdd(this.name).subscribe(data=>{
      if(data["success"] == true){
        alert("Add Success")
        window.history.back()
      }
    })
    // let tag = new Tags(this.name);
    // console.log(tag.name)
    // this.tag.onAdd(tag).subscribe(
    //   data=>{
    //      console.log(data)
    //   }
    // )
  }
}
