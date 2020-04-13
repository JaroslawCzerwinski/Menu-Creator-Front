import { Component, OnInit, OnDestroy } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DtataStorageService } from '../../shared/data-storage.service';
import { MealService } from '../../menu-creator/meal.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  recipeSubscription: Subscription;
  mealSubscription: Subscription;
  addMode :boolean = false;

  constructor(private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute,
    private dataStroageService: DtataStorageService,
    private mealService: MealService) { }

  ngOnInit() {
    this.recipeSubscription = this.recipeService.recipeChanged
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
      );
      this.dataStroageService.loadRecipes().subscribe();
      this.recipes = this.recipeService.getRecipes();

      this.mealSubscription = this.mealService.modeChange.subscribe( 
          (modeStatus: boolean) => {
            this.addMode = modeStatus;
          }//subscription to fix
      );
    
    
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.recipeSubscription.unsubscribe();
    this.mealSubscription.unsubscribe();
  }
}