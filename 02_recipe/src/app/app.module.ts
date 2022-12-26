import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeBookComponent } from './recipes/recipe-book.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { ShoppingListIngerdientComponent } from './shopping-list/shopping-list-ingerdient/shopping-list-ingerdient.component';
import { FormsModule } from "@angular/forms";
import {RecipeService} from "./recipes/recipe.service";

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeComponent,
    ShoppingListEditComponent,
    ShoppingListIngerdientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
