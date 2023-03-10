import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  updated : EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();

  private ingredients : Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10),
    new Ingredient("Eggs", 10)
  ];

  getIngredients() : Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient : Ingredient) {
    this.ingredients.push(ingredient);
    this.updated.emit(this.getIngredients());
  }

  addIngredients(ingredients : Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.updated.emit(this.ingredients.slice());
  }
}
