import {Component, ElementRef, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingridient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput')
  nameInputRef: ElementRef;

  @ViewChild('amountInput')
  amountInputRef: ElementRef;

  onAddItem() {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingredientName, ingredientAmount);

    if ( ingredientName !== '' && ingredientAmount >= 0) {
      this.shoppingListService.addIngredient(newIngredient);
    } else {
      console.error("Empty Name!");
    }
  }

  constructor(private shoppingListService : ShoppingListService) {
  }
}
