import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/_services/category.service';
import { Categories } from 'src/app/_models/category';
import { QuestService } from 'src/app/_services/quest.service';
import { Quests } from 'src/app/_models/quest';

@Component({
  selector: 'app-edit-quest',
  templateUrl: './edit-quest.component.html',
  styleUrls: ['./edit-quest.component.css']
})
export class EditQuestComponent implements OnInit {
  level : string
  content : string
  answers : string[]=[];
  answers1 : string
  answers2 : string
  answers3 : string
  answers4 : string
  answer  : string
  categories : Categories
  category:string;
  id : string
  questions : Quests
  constructor(
    private route : ActivatedRoute,
    private cat : CategoryService,
    private quest : QuestService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(data=>{
      this.id = data.get("id")
      console.log(this.id)
      this.getQuest(this.id)
  })
}
editQuest(){
  console.log(this.questions.answer);
  this.quest.editQuest(this.id,this.level,this.questions.content,this.questions.answer,this.questions.answers).subscribe(data=>{
    if(data["success"] == true){
      alert("Edit Success")
      window.history.back()
    }
  })
}
getQuest(id){
  this.quest.getQuest(id).subscribe(data=>{
    this.questions = data["question"]
    console.log(this.questions)
    this.level = this.questions.level
    
  })

  
}
  
}
