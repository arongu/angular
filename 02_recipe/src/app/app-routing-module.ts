import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {SelectRecipeComponent} from "./recipes/select-recipe/select-recipe.component";
import {RecipeService} from "./recipes/recipe.service";
import {Recipe} from "./recipes/recipe.model";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";

const routes : Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
      // {path: '', component: SelectRecipeComponent, pathMatch: 'full'},
      {path: ':id', component: RecipeDetailComponent, resolve: {recipeService: RecipeService}}
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{
}
