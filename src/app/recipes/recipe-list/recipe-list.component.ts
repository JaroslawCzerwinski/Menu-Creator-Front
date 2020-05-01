import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { MealService } from '../../shared/meal.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  recipeSubscription: Subscription;
  addMode: boolean = false;

  constructor(private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute,
    private dataStroageService: DataStorageService,
    private mealService: MealService
    ) { }

  ngOnInit() {
    this.addMode = this.mealService.addMode;
    this.recipeSubscription = this.recipeService.recipeChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      );
    this.dataStroageService.loadRecipes().subscribe();
    this.recipes = this.recipeService.getRecipes();

  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.recipeSubscription.unsubscribe();
  }
}