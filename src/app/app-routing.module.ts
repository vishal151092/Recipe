import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';


const routes: Routes = [
  {path:'recipes', component:RecipesComponent, children:[
    {path : '' , component: RecipeStartComponent},
    {path:':id' , component:RecipeDetailsComponent}
  ]},
  {path: '' , redirectTo:'recipes', pathMatch:'full'},
  {path: 'shoppingList', component:ShoppingListComponent},
  {path:'**', redirectTo:'recipes', pathMatch:'full'}
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
