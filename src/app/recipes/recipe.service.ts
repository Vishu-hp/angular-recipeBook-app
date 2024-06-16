import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe Messi',
      'This recipe is for Messi',
      'https://www.fcbarcelona.com/photo-resources/2020/04/30/43337a9f-3781-4886-948c-f70912e4b1af/1920x1080_Messi_primerGol-min.jpg?width=1200&height=750',
      [
        new Ingredient('barca', 10),
        new Ingredient('psg', 2),
        new Ingredient('inter miami', 2),
      ]
    ),
    new Recipe(
      'A Test Recipe Cristiano',
      'This recipe is for Cristiano',
      'https://assets.manutd.com/AssetPicker/images/0/0/10/126/687707/Legends-Profile_Cristiano-Ronaldo1523460877263.jpg',
      [
        new Ingredient('sporting lisbon', 5),
        new Ingredient('Man Utd', 7),
        new Ingredient('Real Madrid', 10),
        new Ingredient('Juventus', 3),
        new Ingredient('Al Nassar', 2),
      ]
    ),
    new Recipe(
      'A Test Recipe Kobe',
      'This recipe is for Kobe',
      'https://i.pinimg.com/736x/f7/4b/6d/f74b6d7459a5c9f82057186147ddfbe6.jpg',
      [new Ingredient('Lakers', 20)]
    ),
    new Recipe(
      'A Test Recipe Jordan',
      'This recipe is for Jordan',
      'https://cdn.nba.com/manage/2021/08/michael-jordan-looks.jpg',
      [
        new Ingredient('Chicago Bulls', 13),
        new Ingredient('Washington Wizards', 2),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.getRecipes()[index];
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
