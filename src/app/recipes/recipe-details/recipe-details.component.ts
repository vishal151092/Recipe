import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../recipe.model';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

   recipeDetail : Recipe ;
   id : number;
  constructor(private route : ActivatedRoute, private recipeService : RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (param :Params) =>{
        this.id = +param['id'];
        this.recipeDetail = this.recipeService.getRecipe(this.id);    
      }
    )
    
  }

  
}
