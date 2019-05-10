import { Component, OnInit } from '@angular/core';
import { TagServices } from 'src/app/_services/tags.service';
import { ActivatedRoute } from '@angular/router';
import { Tags } from 'src/app/_models/tag';

@Component({
  selector: 'app-edit-tag',
  templateUrl: './edit-tag.component.html',
  styleUrls: ['./edit-tag.component.css']
})
export class EditTagComponent implements OnInit {
   name : string
   id : string
   tags : Tags
  constructor(
    private tag : TagServices,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
   this.route.paramMap.subscribe(data=>{
     this.id = data.get("id")
   })
   this.getTag(this.id)
}
getTag(id){
  this.tag.getTag(this.id).subscribe(data=>{
    this.tags = data["tag"]
    this.id = this.tags._id
  })
}
editTag(){
  this.tag.editTag(this.id,this.tags.name).subscribe(data=>{
    if(data["success"] == true){
      alert("Edit Success")
      window.history.back()
    }
  })
}
}
