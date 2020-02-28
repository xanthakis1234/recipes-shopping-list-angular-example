import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Simply test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('Another Test Recipe', 'Simply test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg')
  ];
  recipeSelected = new EventEmitter<Recipe>();
  getRecipes(){
    //slice returns a copy of the above array
    return this.recipes.slice();
  }
}
