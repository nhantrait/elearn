import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/_services/category.service';
import { Vocabs } from 'src/app/_models/vocab';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-vocab',
  templateUrl: './search-vocab.component.html',
  styleUrls: ['./search-vocab.component.css']
})
export class SearchVocabComponent implements OnInit {
  searche : string
  vocabs : Vocabs
  constructor(
    private cat : CategoryService,
private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(data=>{
      this.searche = data.get("q")
    })
    console.log(this.searche)
    this.cat.getResultSearch(this.searche).subscribe(data=>{
      this.vocabs = data["words"]
      console.log(this.vocabs)
    })
  }

}
