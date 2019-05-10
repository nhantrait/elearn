import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { RouterModule } from '@angular/router';
import { Vocabs } from 'src/app/_models/vocab';
import { CategoryService } from 'src/app/_services/category.service';
@Component({
  selector: 'app-show-vocab',
  templateUrl: './show-vocab.component.html',
  styleUrls: ['./show-vocab.component.css']
})
export class ShowVocabComponent implements OnInit {
  public vocabs : Vocabs
    id : string
    url : string
    searche : string
    vocab : Vocabs
  constructor(
    private router : ActivatedRoute,
    private cat : CategoryService
  ) { }

  ngOnInit() {
    this.url = window.location.pathname;
    this.router.paramMap.subscribe(data=>{
      this.id = data.get("id")
    })
    this.getWords(this.id)
  }
  getWords(id){
    this.cat.getIdCat(id).subscribe(data=>{
      this.vocabs = data["words"]
    })
  }
  deleteWord(id){
    console.log(id);
    this.cat.deleteVocab(id).subscribe(data=>{
      if(data["success"] == true){
        this.getWords(this.id)
        alert("Delete Success")
      }
    },error=>{
      console.log(error);
    })
  }
 
}
