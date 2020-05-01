import { Injectable } from "@angular/core";
import {
    Resolve,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from "@angular/router";

import { MealService } from "../shared/meal.service";

@Injectable()
export class ModeResolverService implements Resolve<boolean> {

    constructor(private mealServie: MealService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (route.url[0].path == "recipes") {
            return this.mealServie.addMode = false;
        } else if (route.url[0].path == "menu-creator") {
            return this.mealServie.addMode = true;
        }
    }
}