import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categories } from '../_models/category';
import { environment } from 'src/environments/environment';
let headerOptions={
  headers: new HttpHeaders
};
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http : HttpClient
  ) { }
  show(){
    return this.http.get("https://elearn-anhhong.c9users.io/api/category")
  }
  getTypes(id_category){
    return this.http.get<any>(environment.API+"/category/"+id_category+"/children")
  }
  getIdCat(id_level){
    return this.http.get(environment.API+"/category/"+id_level+"/words")
  }
  getWord(id){
    return this.http.get(environment.API+"/word?id="+id)
  }
  getGrammar(id){
    return this.http.get(environment.API+"/grammar?id="+id)
  }
  getIdCatGram(id_level){
    return this.http.get(environment.API+"/category/"+id_level+"/grammars")
  }
  getQuest(){
    return this.http.get(environment.API+"/question")
  }
  addVocab(category,name,mean,spell,usage,example,linkMp3){
    if(headerOptions.headers.get('token')==null){
      headerOptions.headers = headerOptions.headers.append("token",localStorage.getItem('token'));
    }
    return this.http.post(environment.API+"/word",{category,name,mean,spell,usage,example,linkMp3},headerOptions)
  }
  editVocab(id,category,name,mean,spell,usage,example,linkMp3){
    if(headerOptions.headers.get('token')==null){
      headerOptions.headers = headerOptions.headers.append("token",localStorage.getItem('token'));
    }
    return this.http.put(environment.API+"/word",{id,category,name,mean,spell,usage,example,linkMp3},headerOptions)
  }
  deleteVocab(id){
    if(headerOptions.headers.get('token')==null){
      headerOptions.headers = headerOptions.headers.append("token",localStorage.getItem('token'));
    }
    return this.http.request("delete",environment.API+"/word",{body:{id},headers:headerOptions.headers});
  }
  addGrammar(category,name,form,example,usage){
    if(headerOptions.headers.get('token')==null){
      headerOptions.headers = headerOptions.headers.append("token",localStorage.getItem('token'));
    }
    return this.http.post(environment.API+"/grammar",{category,name,form,example,usage},headerOptions)
  }
  editGrammar(id,category,name,form,example,usage){
    if(headerOptions.headers.get('token')==null){
      headerOptions.headers = headerOptions.headers.append("token",localStorage.getItem('token'));
    }
    return this.http.put(environment.API+"/grammar",{id,category,name,form,example,usage},headerOptions)
  }
  deleteGrammar(id){
    if(headerOptions.headers.get('token')==null){
      headerOptions.headers = headerOptions.headers.append("token",localStorage.getItem('token'));
    }
    return this.http.request("delete",environment.API+"/grammar",{body:{id},headers:headerOptions.headers});
  }
  addCat(name){
    if(headerOptions.headers.get('token')==null){
      headerOptions.headers = headerOptions.headers.append("token",localStorage.getItem('token'));
    }
    return this.http.post(environment.API+"/category",{name},headerOptions);
  }
  getCat(id){
    return this.http.get(environment.API+"/category?id="+id)
  }
  getCatChild(id){
    return this.http.get(environment.API+"/category/"+id+"/children")
  }
  editCat(id,name){
    if(headerOptions.headers.get('token')==null){
      headerOptions.headers = headerOptions.headers.append("token",localStorage.getItem('token'));
    }
    return this.http.put(environment.API+"/category",{id,name},headerOptions)
  }
  deleteCat(id){
    if(headerOptions.headers.get('token')==null){
    headerOptions.headers = headerOptions.headers.append("token",localStorage.getItem('token'));
  }
  return this.http.request("delete",environment.API+"/category",{body:{id},headers:headerOptions.headers});
}
addCatChild(parent,name){
  if(headerOptions.headers.get('token')==null){
    headerOptions.headers = headerOptions.headers.append("token",localStorage.getItem('token'));
  }
  return this.http.post(environment.API+"/category",{parent,name},headerOptions);
}
editCatChild(parent,id,name){
  if(headerOptions.headers.get('token')==null){
    headerOptions.headers = headerOptions.headers.append("token",localStorage.getItem('token'));
  }
  return this.http.put(environment.API+"/category",{parent,id,name},headerOptions)
}
}
