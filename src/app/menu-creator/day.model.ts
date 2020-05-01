import { Recipe } from "../recipes/recipe.model";

export class Day {
    public date: Date;
    public recipes :Recipe[]

    constructor(date: Date, recipes ?: Recipe[]) {
        this.date = date;
        this.recipes = recipes;
    }

    getDate(){
        return this.date;
    }

    getRecipe(){
        return this.recipes;
    }

    setRecipe(recipes: Recipe[]){
        this.recipes = recipes;
    }
}