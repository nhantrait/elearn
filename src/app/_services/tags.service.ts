import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Tags } from '../_models/tag';
let headerOptions={
  headers: new HttpHeaders()
};
@Injectable({
  providedIn: 'root'
})
export class TagServices {

  constructor(
    private http: HttpClient
  ) {
  }
  onAdd(name : string){
    if(headerOptions.headers.get('token')==null){
      headerOptions.headers = headerOptions.headers.append("token",localStorage.getItem('token'));
    }
    console.log(name);
    return this.http.post(environment.API+"/tag",{name},headerOptions);
  }
  showTags(){
    return this.http.get(environment.API+"/tag")
  }
  editTag(id,name){
    if(headerOptions.headers.get('token')==null){
      headerOptions.headers = headerOptions.headers.append("token",localStorage.getItem('token'));
    }
    return this.http.put(environment.API+"/tag",{id,name},headerOptions)
  
  }
  getTag(id){
    return this.http.get(environment.API+"/tag?id="+id)
  }
  deleteTag(id){
    if(headerOptions.headers.get('token')==null){
      headerOptions.headers = headerOptions.headers.append("token",localStorage.getItem('token'));
    }
    return this.http.request("delete",environment.API+"/tag",{body:{id},headers:headerOptions.headers});
  }
  deletePost(id){
    if(headerOptions.headers.get('token')==null){
      headerOptions.headers = headerOptions.headers.append("token",localStorage.getItem('token'));
    }
    return this.http.request("delete",environment.API+"/post",{body:{id},headers:headerOptions.headers});
  }
}
