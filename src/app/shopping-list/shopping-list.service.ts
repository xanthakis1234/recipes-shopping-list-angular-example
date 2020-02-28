import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs";

export class ShoppingListService {
  ingredientsChange = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  /*because we return a slice in getIngredients, when a
new ingredient is added we dont see it. To combat that
we simply create an event that we emit when the list has changed
and then we get a new slice of the ingredients list
 */
  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChange.next(this.ingredients.slice());
  }

  /*turn an array of elements into a list of elements
  here we get an array and if we push it it will make one
  object. we want to push each item in the array into now objects
  To do this you simply use the spread operator (... Array)
 */
  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChange.next(this.ingredients.slice());
  }
}
