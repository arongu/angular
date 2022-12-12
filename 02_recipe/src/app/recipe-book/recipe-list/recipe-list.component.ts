import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'Test desc', 'https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=45&resize=768,574'),
    new Recipe('Test2 recipe', 'Test2 desc', 'https://www.simplyrecipes.com/thmb/XjhjH5LItnsnytov2gKvONqm8Ok=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__12__Beef-Chili-LEAD-VERTICAL-2e908cb8aceb4a71bfd495f76b3f0481.jpg')
  ];

  constructor() {
  }
}