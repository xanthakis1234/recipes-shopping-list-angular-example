import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Burger',
      'Just a burger',
      'https://cdn.pixabay.com/photo/2017/12/29/12/56/burger-3047550_960_720.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
        new Ingredient('Tomatoes', 1)
      ]),
    new Recipe(
      'Schnitzel',
      'This is a schnitzel',
      'https://cdn.pixabay.com/photo/2019/03/25/20/20/schnitzel-4081269_960_720.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ])
  ];
  recipeSelected = new EventEmitter<Recipe>();
  constructor(private slService: ShoppingListService) {
  }

  getRecipes(){
    //slice returns a copy of the above array
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
