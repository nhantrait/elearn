import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categories } from '../_models/category';
import { environment } from 'src/environments/environment';
let headerOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(
    private http : HttpClient
  ) { }
//   show(){
//     return this.http.get("https://elearn-anhhong.c9users.io/api/category")
//   }
  login(username,password){
    return this.http.post<any>(environment.API+"/login/",{username,password});
  }
  getProfile(){
    if(headerOptions.headers.get('token')==null)
    headerOptions.headers = headerOptions.headers.append("token",localStorage.getItem("token"))
    return this.http.get<any>(environment.API+"/profile",headerOptions);
  }
  addAccount(username,password){
    if(headerOptions.headers.get('token')==null)
    headerOptions.headers = headerOptions.headers.append("token",localStorage.getItem("token"))
    return this.http.post<any>(environment.API+"/profile",{username,password},headerOptions);
  }
  updateProfile(username,password){
    if(headerOptions.headers.get('token')==null)
    headerOptions.headers = headerOptions.headers.append("token",localStorage.getItem("token"))
    return this.http.put<any>(environment.API+"/profile",{username,password},headerOptions);
  }
}
