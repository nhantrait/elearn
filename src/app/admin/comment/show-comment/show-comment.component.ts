import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/_services/post.service';
import { Posts } from 'src/app/_models/posts.model';
import { TagServices } from 'src/app/_services/tags.service';
import { Tags } from 'src/app/_models/tag';

@Component({
  selector: 'app-show-comment',
  templateUrl: './show-comment.component.html',
  styleUrls: ['./show-comment.component.css']
})
export class ShowCommentComponent implements OnInit {

  posts : Posts[]=[]
  tags  : Tags[]=[];
  objectTag:any = {};
  constructor(
    private service : PostService,
    private servicetag : TagServices
  ) { }

  ngOnInit() {
    this.getAllPost()
    this.getTag();
  }
  getAllPost(){
    this.service.show().subscribe(
      data =>{
        this.posts = data["posts"];
      }
    )
  }
  getDetail(id){
    window.location.href="/detail?id="+id;
  }
  getTag(){
    this.servicetag.showTags().subscribe(
      data=>{
        this.tags=data["tags"];
        console.log(this.tags);
        this.tags.forEach(tag=>{
          this.objectTag[tag._id]=tag.name;
        });
      }
    )
  }
  deletePost(id){
    this.servicetag.deletePost(id).subscribe(data=>{
      if(data["success"] == true){
        alert("Delete Success")
        this.getAllPost()
      }
    },error=>{
      console.log(error);
    })
  }
}
