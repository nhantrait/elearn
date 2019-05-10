import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
let headerOptions={
  headers: new HttpHeaders
};
@Injectable({
  providedIn: 'root'
})
export class QuestService {

  constructor(
    private http : HttpClient
  ) { }
  addQuest(level,content,answer,answers : any[]){
    if(headerOptions.headers.get('token')==null){answers
      headerOptions.headers = headerOptions.headers.append("token",localStorage.getItem('token'));
    }
    return this.http.post(environment.API+"/question",{level,answer,content,answers},headerOptions)
  }
  editQuest(id,category,content,answer,answers : any[]){
    if(headerOptions.headers.get('token')==null){answers
      headerOptions.headers = headerOptions.headers.append("token",localStorage.getItem('token'));
    }
    return this.http.put(environment.API+"/question",{id,category,answer,content,answers},headerOptions)
  }
  getQuest(id){
    return this.http.get(environment.API+"/question?id="+id)
  }
  deleteQuest(id){
    if(headerOptions.headers.get('token')==null){
      headerOptions.headers = headerOptions.headers.append("token",localStorage.getItem('token'));
    }
    return this.http.request("delete",environment.API+"/question",{body:{id},headers:headerOptions.headers});
  }
}
