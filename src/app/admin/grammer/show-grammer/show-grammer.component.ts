import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/_services/category.service';
import { ActivatedRoute } from '@angular/router';
import { Grammars } from 'src/app/_models/grammar';

@Component({
  selector: 'app-show-grammer',
  templateUrl: './show-grammer.component.html',
  styleUrls: ['./show-grammer.component.css']
})
export class ShowGrammerComponent implements OnInit {
  id : string
  url : string
  public grammars : Grammars
  constructor(
    private cat : CategoryService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.url = window.location.pathname;
    this.route.paramMap.subscribe(data=>{
      this.id = data.get("id")
    })
    this.getGrammars(this.id)
  }
  getGrammars(id){
    this.cat.getIdCatGram(id).subscribe(data=>{
      this.grammars = data["grammars"]
    })
  }
  deleteGrammar(id){
    this.cat.deleteGrammar(id).subscribe(data=>{
      if(data["success"] == true){
        this.getGrammars(this.id)
        alert("Delete Success")
      }
    },error=>{
      console.log(error);
    })
  }
}
