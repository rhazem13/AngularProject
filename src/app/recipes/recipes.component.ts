import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipes/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }
}
