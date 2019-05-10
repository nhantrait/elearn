import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommentService } from 'src/app/_services/comment.service';
import { RouterLinkActive, ActivatedRoute } from '@angular/router';
import { comment } from 'src/app/_models/comment.model';


@Component({
  selector: 'app-show-comment-detail',
  templateUrl: './show-comment-detail.component.html',
  styleUrls: ['./show-comment-detail.component.css']
})
export class ShowCommentDetailComponent implements OnInit {
  id: number;
  comments : comment[];
  constructor(
    public commment: CommentService,
    private route: ActivatedRoute
  ) {

  }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.loadData();
  }
  loadData() {
    this.commment.getCommentByIDPost(this.id).subscribe(
      data => {
        this.comments = data["comments"]
    })
  }
  deleteComment(id){
    this.commment.deleteComment(id).subscribe(data=>{
      if(data["success"] == true){
        alert("Delete Success")
        this.loadData()
      }
    },error=>{
      console.log(error);
    })
  }
}
