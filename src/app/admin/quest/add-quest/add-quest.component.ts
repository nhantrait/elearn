import { Component, OnInit } from '@angular/core';
import { QuestService } from 'src/app/_services/quest.service';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { CategoryService } from 'src/app/_services/category.service';
import { Categories } from 'src/app/_models/category';
import { HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-add-quest',
  templateUrl: './add-quest.component.html',
  styleUrls: ['./add-quest.component.css']
})
export class AddQuestComponent implements OnInit {
  level : string
  content : string
  answers : string[]=[];
  answers1 : string
  answers2 : string
  answers3 : string
  answers4 : string
  answer  : string
  categories : Categories
  listChildCategories1:any[];
  listChildCategories2:any[];
  category:string;
  constructor(
    private quest : QuestService,
    private cat : CategoryService
  ) { }
    id_topic:string;
  ngOnInit() {
    this.getCategory()
  }
  addQuest(){
    console.log(this.answers1);
    this.answers.push(this.answers1);
    this.answers.push(this.answers2);
    this.answers.push(this.answers3);
    this.answers.push(this.answers4);
    console.log(this.answers);
    // console.log("as: "+this.answer);
    // console.log("ct: "+this.content);
    this.quest.addQuest(this.category,this.content,this.answer,this.answers).subscribe(data=>{
      console.log(data);
      if(data["success"] == true){
        alert("Add Success")
        window.history.back()
      }
    },error=>{
      console.log(error);
    })
  }
  selectOption(event){
    this.listChildCategories1=null;
    this.listChildCategories2=null;
    this.id_topic = event;
    this.cat.getTypes(this.id_topic).subscribe(data=>{
      console.log(data);
      if(data!=null){
        this.cat.getTypes(data.children[0]._id).subscribe(data=>{
          console.log(data);
          this.listChildCategories1 = data.children;
          this.category = this.listChildCategories1[0]._id
        })
        this.cat.getTypes(data.children[1]._id).subscribe(data=>{
          console.log(data);
          this.listChildCategories2 = data.children;
        })
        
      }
    })
  }
  getCategory(){
    this.cat.show().subscribe(data=>{
      if(data!=null){
        this.categories = data["categories"]
        this.id_topic=this.categories[0]._id;
        console.log(this.id_topic)
        this.listChildCategories1=null;
    this.listChildCategories2=null;
    this.cat.getTypes(this.id_topic).subscribe(data=>{
      console.log(data);
      if(data!=null){
        this.cat.getTypes(data.children[0]._id).subscribe(data=>{
          console.log(data);
          this.listChildCategories1 = data.children;
          this.category = this.listChildCategories1[0]._id
        })
        this.cat.getTypes(data.children[1]._id).subscribe(data=>{
          console.log(data);
          this.listChildCategories2 = data.children;
        })
        
      }
    })
      }
    })
  }
  selectOption1(value){
    this.category = value;
    console.log(this.category);
  }
}
