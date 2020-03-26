import { Recipe } from "../../recipe.model";

export class Day {
    public date: string;
    public breakfast: Recipe;
    public dinner: Recipe;
    public supper: Recipe;

    constructor(date: string, breakfast: Recipe, dinner: Recipe, supper: Recipe) {
        this.date = date;
        this.breakfast = breakfast;
        this.dinner = dinner;
        this.supper = supper;
    }
}