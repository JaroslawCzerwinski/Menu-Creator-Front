import { Injectable } from "@angular/core";
import {
    Resolve,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from "@angular/router";

import { DtataStorageService } from "../shared/data-storage.service";
import { Day } from "./day.model";
import { DaysService } from "./days.service";

@Injectable()
export class DaysResolverService implements Resolve<Day[]> {

    constructor(private dataStorageService: DtataStorageService, private daysServie: DaysService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const days = this.daysServie.getShowedDays();
        if(days.length === 0){
            return this.dataStorageService.loadDays();
        } else {
            return days;
        }
    }
}