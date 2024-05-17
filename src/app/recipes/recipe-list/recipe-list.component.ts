import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This recipe is for testing only',
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5503fd01-2819-4ab8-9d25-4dfc9c9cfdfa/dgihjkq-675dc5b9-0357-4777-b7f0-8f4356f1d87f.jpg/v1/fit/w_375,h_375,q_70,strp/garlic_confit_with_baguette_slices_by_vulcanknight_dgihjkq-375w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzU1MDNmZDAxLTI4MTktNGFiOC05ZDI1LTRkZmM5YzljZmRmYVwvZGdpaGprcS02NzVkYzViOS0wMzU3LTQ3NzctYjdmMC04ZjQzNTZmMWQ4N2YuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ZfyIJCd8lTNH0AesocHcRSUDtwNzekWyonrqDbdItw0'
    ),
    new Recipe(
      'A Test Recipe',
      'This recipe is for testing only',
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5503fd01-2819-4ab8-9d25-4dfc9c9cfdfa/dgihjkq-675dc5b9-0357-4777-b7f0-8f4356f1d87f.jpg/v1/fit/w_375,h_375,q_70,strp/garlic_confit_with_baguette_slices_by_vulcanknight_dgihjkq-375w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzU1MDNmZDAxLTI4MTktNGFiOC05ZDI1LTRkZmM5YzljZmRmYVwvZGdpaGprcS02NzVkYzViOS0wMzU3LTQ3NzctYjdmMC04ZjQzNTZmMWQ4N2YuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ZfyIJCd8lTNH0AesocHcRSUDtwNzekWyonrqDbdItw0'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
