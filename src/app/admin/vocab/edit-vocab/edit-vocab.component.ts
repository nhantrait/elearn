import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/_services/category.service';
import { ActivatedRoute } from '@angular/router';
import { Grammars } from 'src/app/_models/grammar';
import { Vocabs } from 'src/app/_models/vocab';

@Component({
  selector: 'app-edit-vocab',
  templateUrl: './edit-vocab.component.html',
  styleUrls: ['./edit-vocab.component.css']
})
export class EditVocabComponent implements OnInit {
  id : string
  category : string
  name : string
  mean : string
  spell : string
  example : string
  usage : string
  linkMp3 : string
  url : string
  word : Vocabs
  constructor(
    private cat : CategoryService,
    private route : ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(data=>{
      this.id = data.get("idword")
      console.log(this.id)
      this.getVocab()
  })
}
editVocab(){
  console.log(this.word);
  this.cat.editVocab(this.id,this.category,this.word.name,this.word.mean,this.word.spell,this.word.usage,this.word.example,this.linkMp3).subscribe(data=>{
    if(data["success"] == true){
      alert("Edit Success")
      window.history.back()
    }
  })
}
getVocab(){
  this.cat.getWord(this.id).subscribe(data=>{
    this.word = data["word"]
    this.category = this.word.category
  })

  
}
}
