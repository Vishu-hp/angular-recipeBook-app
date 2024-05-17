import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  currentRecipeName: string;

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe Messi',
      'This recipe is for Messi',
      'https://www.fcbarcelona.com/photo-resources/2020/04/30/43337a9f-3781-4886-948c-f70912e4b1af/1920x1080_Messi_primerGol-min.jpg?width=1200&height=750'
    ),
    new Recipe(
      'A Test Recipe Cristiano',
      'This recipe is for Cristiano',
      'https://assets.manutd.com/AssetPicker/images/0/0/10/126/687707/Legends-Profile_Cristiano-Ronaldo1523460877263.jpg'
    ),
    new Recipe(
      'A Test Recipe Kobe',
      'This recipe is for Kobe',
      'https://i.pinimg.com/736x/f7/4b/6d/f74b6d7459a5c9f82057186147ddfbe6.jpg'
    ),
    new Recipe(
      'A Test Recipe Jordan',
      'This recipe is for Jordan',
      'https://cdn.nba.com/manage/2021/08/michael-jordan-looks.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    console.log('recipe list', recipe);
    this.currentRecipeName = recipe.name;
    this.recipeWasSelected.emit(recipe);
  }
}
