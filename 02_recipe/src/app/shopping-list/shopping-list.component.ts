import { Component } from '@angular/core';
import {Ingredient} from "../shared/ingridient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10),
    new Ingredient("Eggs", 10),
  ]

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    console.log("here")
  }
}
