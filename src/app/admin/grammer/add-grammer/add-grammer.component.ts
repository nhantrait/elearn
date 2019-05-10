import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/_services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-grammer',
  templateUrl: './add-grammer.component.html',
  styleUrls: ['./add-grammer.component.css']
})
export class AddGrammerComponent implements OnInit {

  category : string
  name : string
  form : string
  example : string
  usage : string
  url : string
  constructor(
    private cat : CategoryService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.url = window.location.pathname;
     this.route.paramMap.subscribe(data=>{
      this.category = data.get("id")
      console.log(this.category)
    })
  }
  addGrammar(){
    this.cat.addGrammar(this.category,this.name,this.form,this.example,this.usage).subscribe(data=>{
      if(data["success"] == true){
        alert("Add Success")
        window.history.back()
      }
    })
  }
}
