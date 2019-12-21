import { Injectable } from '@angular/core';
import{ Recipe } from './recipe.model';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeList=[];
  constructor() { 

    this.recipeList.push(new Recipe(0, "Aalu Kulcha", "boiled potatoe stuffed in a thin bread and baked over wooden coal.", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Aloo_Kulcha.jpg/800px-Aloo_Kulcha.jpg"));
    
    this.recipeList.push(new Recipe(1,"Lassi", "Yogurt added with cream and sugar is blanded and served in preferably earthen pot.", 
    "https://i1.wp.com/flavouroma.com/wp-content/uploads/2018/03/salted-lassi.jpg?fit=561%2C840&ssl=1"));
    
    this.recipeList.push(new Recipe(2,"Chicken tikka", "chicken pieces marinated and grilled on tandoor.", 
    "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tandoorimumbai.jpg"));
    
    this.recipeList.push(new Recipe(3,"Ice-cream", "Cream & milk boiled with sugar and flavours are added .", 
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/Soft_Ice_cream.jpg"));
    
  }

getRecipe(id :number){
  return this.recipeList[id];
}
  


}
