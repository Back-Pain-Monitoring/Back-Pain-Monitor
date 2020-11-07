import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { LogDataService } from './log-data.service';

@Injectable({
  providedIn: 'root'
})
export class DatetimeAuthguardService implements CanDeactivate<> {

  constructor(private router: Router, private dataService: LogDataService) { }

  canDeactivate(route: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean {
    if (this.dataService.currentLogDatetime === undefined) {
      console.log("invalid datetime");
      return false;
    }

    return true;

  }
}
