import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/_services/category.service';
import { Quests } from 'src/app/_models/quest';
import { QuestService } from 'src/app/_services/quest.service';

@Component({
  selector: 'app-show-quest',
  templateUrl: './show-quest.component.html',
  styleUrls: ['./show-quest.component.css']
})
export class ShowQuestComponent implements OnInit {
  public questions : Quests
  constructor(
    private cat : CategoryService,
    private quest : QuestService
  ) { }

  ngOnInit() {
    this.getAllQuest()
  }
  getAllQuest(){
    this.cat.getQuest().subscribe(data=>{
      this.questions = data["questions"]
    })
  }
  deleteQuest(id){
    console.log(id);
    this.quest.deleteQuest(id).subscribe(data=>{
      if(data["success"] == true){
        this.getAllQuest()
        alert("Delete Success")
      }
    },error=>{
      console.log(error);
    })
  }
}
