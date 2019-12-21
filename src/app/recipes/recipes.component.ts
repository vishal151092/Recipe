import {Component} from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
    selector: '<app-recipes>',
    templateUrl: './recipes.component.html'
})
export class RecipesComponent{

    recipeDetailObj :Recipe;

    recipeClicked(event : Recipe){
        this.recipeDetailObj=event;
    }
}