import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PostService } from '../_services/post.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  name: String;
  constructor(
  ) { }

  ngOnInit() {
   
  }

}
