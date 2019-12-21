import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipeList : Recipe[] = [];
//@Output() RecipePassedTwice = new EventEmitter<Recipe>()
  constructor(private activeRoute : ActivatedRoute, private route : Router, private recipeService : RecipeService) { }

  ngOnInit() {
    this.recipeList = this.recipeService.recipeList;
    
  }

  onRecipeSelected(recipe : Recipe){
//this.RecipePassedTwice.emit(recipe);
this.route.navigate([recipe.id] , {relativeTo: this.activeRoute} )
}
}
