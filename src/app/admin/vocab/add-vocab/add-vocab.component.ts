import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/_services/category.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-add-vocab',
  templateUrl: './add-vocab.component.html',
  styleUrls: ['./add-vocab.component.css']
})
export class AddVocabComponent implements OnInit {
  category : string
  name : string
  mean : string
  spell : string
  example : string
  usage : string
  linkMp3 : string
  url : string
  constructor(
    private cat : CategoryService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
     this.route.paramMap.subscribe(data=>{
      this.category = data.get("id")
      console.log(this.category)
    })
  }
  addVocab(){
    this.cat.addVocab(this.category,this.name,this.mean,this.spell,this.usage,this.example,this.linkMp3).subscribe(data=>{
      if(data["success"] == true){
        alert("Add Success")
        window.history.back()
      }
    })
  }


}
