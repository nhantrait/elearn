import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
let headerOptions={
  headers: new HttpHeaders()
};

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private http : HttpClient) {
   }
  getCommentByIDPost(id : number){
    return this.http.get(environment.API + "/post/" + id + "/comments");
  }
  deleteComment(id){
    if(headerOptions.headers.get('token')==null){
      headerOptions.headers = headerOptions.headers.append("token",localStorage.getItem('token'));
    }
    return this.http.request("delete",environment.API+"/comment",{body:{id},headers:headerOptions.headers});
  }
}
