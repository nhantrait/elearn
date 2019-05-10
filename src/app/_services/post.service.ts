import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) {
  }

  show(){
    return this.http.get('https://elearn-anhhong.c9users.io/api/post');
  }
}
