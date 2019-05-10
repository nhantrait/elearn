import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/_services/category.service';
import { Grammars } from 'src/app/_models/grammar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-grammer',
  templateUrl: './edit-grammer.component.html',
  styleUrls: ['./edit-grammer.component.css']
})
export class EditGrammerComponent implements OnInit {

  id : string
  category : string
  name : string
  example : string
  usage : string
  form : string
  url : string
  grammar : Grammars
  constructor(
    private cat : CategoryService,
    private route : ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(data=>{
      this.id = data.get("idgrammar")
      console.log(this.id)
      this.getGrammar()
  })
}
editGrammar(){
  this.cat.editGrammar(this.id,this.category,this.grammar.name,this.grammar.form,this.grammar.usage,this.grammar.example).subscribe(data=>{
    if(data["success"] == true){
      alert("Edit Success")
      window.history.back()
    }
  })
}
getGrammar(){
  this.cat.getGrammar(this.id).subscribe(data=>{
    this.grammar = data["grammar"]
    this.category = this.grammar.category
    console.log(this.category)
  })

  
}
}
