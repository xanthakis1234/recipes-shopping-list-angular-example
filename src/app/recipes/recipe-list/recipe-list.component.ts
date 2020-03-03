import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {DataStorageService} from "../../shared/data-storage.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[];
  subscription: Subscription;

  constructor(private recipeService: RecipeService,
              private router: Router,
              private dataStorageService: DataStorageService,
              private route: ActivatedRoute ) { }

  ngOnInit() {
    this.dataStorageService.fetchRecipes().subscribe( response =>{
      this.recipes = response
    });
  }

  onNewRecipe() {
    this.subscription = this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      );
    this.router.navigate(['new'],{relativeTo: this.route});
  }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }
}
