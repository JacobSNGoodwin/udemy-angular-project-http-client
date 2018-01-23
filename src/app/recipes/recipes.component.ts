import { Component, OnInit } from '@angular/core';

//Needs to be provided in app.module.ts so that it isn't destroyed when naviagating to shopping list and back!
//import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
  //providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
