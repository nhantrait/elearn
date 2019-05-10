import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/_models/category';
import { ActivatedRoute ,Params } from '@angular/router';
import { CategoryService } from 'src/app/_services/category.service';
import { RouterLinkActive, } from '@angular/router';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public category:Categories;
  private categories:Categories[];
  private type:any[];
  public listVocab:any[];
  public listGrammar:any[];
  private listPrivate:any[];
  id : number
  constructor(
    public activeRouteService: ActivatedRoute,
    public categoryService: CategoryService
   
  ) { } 
   
  ngOnInit() {
    this.getAllCategories()
    // this.id = this.route.snapshot.params['id'];
    // this.getIdCat()
  }
  getAllCategories(){
  	let category_name;
    this.activeRouteService.paramMap.subscribe(data=>{
      if(data!=null){
        category_name = data.get('name');
        console.log(category_name)
        this.categoryService.show().subscribe(data=>{
          if(data!=null){
            this.categories = data["categories"];
            for (var i = 0; i < this.categories.length; ++i) {
              if(this.categories[i].name==category_name){
                this.category = this.categories[i];
              }
            }
            console.log(this.category);
            this.getType();
          }
        },error=>{
          console.log(error);
        });
      }
    });
  	
}
getType(){
  if(this.category!=null){
    this.categoryService.getTypes(this.category._id).subscribe(data=>{
      console.log(data);
      if(data!=null){
        this.type = data["children"];
        this.categoryService.getTypes(this.type[1]._id).subscribe(data=>{
          console.log(data);
          this.listVocab = data["children"];
        },error=>{
          console.log(error);
        });
        this.categoryService.getTypes(this.type[0]._id).subscribe(data=>{
          this.listGrammar = data["children"];
        },error=>{
          console.log(error);
        });
      }
    },error=>{
      console.log(error);
    });
  }
}

}
