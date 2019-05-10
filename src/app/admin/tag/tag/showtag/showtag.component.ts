import { Component, OnInit } from '@angular/core';
import { TagServices } from 'src/app/_services/tags.service';
import { Tags } from 'src/app/_models/tag';

@Component({
  selector: 'app-showtag',
  templateUrl: './showtag.component.html',
  styleUrls: ['./showtag.component.css']
})
export class ShowtagComponent implements OnInit {
  public tags : Tags[]
  constructor(
    private tag : TagServices
  ) { }

  ngOnInit() {
   this.getAllTag()
  }
  getAllTag(){
    this.tag.showTags().subscribe(
      data=>{
        this.tags = data["tags"]
      }
    )
  }
  deleteTag(id){
    this.tag.deleteTag(id).subscribe(data=>{
      if(data["success"] == true){
        alert("Delete Success")
        this.getAllTag()
      }
    },error=>{
      console.log(error);
    })
  }

}
