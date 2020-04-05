import { Recipe } from "../recipes/recipe.model";



export class Day {
    public date: Date;
    public breakfast: Recipe;
    public dinner: Recipe;
    public supper: Recipe;

    constructor(date: Date, breakfast: Recipe, dinner: Recipe, supper: Recipe) {
        this.date = date;
        this.breakfast = breakfast;
        this.dinner = dinner;
        this.supper = supper;
    }

    getDate(){
        return this.date;
    }
}