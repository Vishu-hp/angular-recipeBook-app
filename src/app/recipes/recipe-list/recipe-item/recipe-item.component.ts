import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeName: string;
  @Input() recipeDesc: string;
  @Input() recipeImgPath: string;

  constructor() {}

  ngOnInit(): void {}
}
