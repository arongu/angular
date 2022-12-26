import { Component } from '@angular/core';
import {Recipe} from "./recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent {
  selectedRecipe: Recipe = new Recipe("default", "default2", "default2");
}
