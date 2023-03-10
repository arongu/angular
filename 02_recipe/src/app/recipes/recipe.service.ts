import {Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipeService implements Resolve<Recipe> {
  private recipes: Recipe[] = [
    new Recipe(
      'Test recipe', 'Test desc', 'https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=45&resize=768,574',
      [ new Ingredient("Apple", 10), new Ingredient("Banana", 12) ]
    ),

    new Recipe(
      'Test2 recipe', 'Test2 desc', 'https://www.simplyrecipes.com/thmb/XjhjH5LItnsnytov2gKvONqm8Ok=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__12__Beef-Chili-LEAD-VERTICAL-2e908cb8aceb4a71bfd495f76b3f0481.jpg',
      [ new Ingredient("Eggs", 10), new Ingredient("Meat", 2) ]
    )
  ];

  constructor(private shoppingListService : ShoppingListService) {
  }

  getRecipe(index : number) {
    return this.recipes[index];
  }

  getRecipes() : Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients : Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Recipe> | Promise<Recipe> | Recipe {

    const id = +route.params['id'];
    return this.recipes[id];
  }
}
