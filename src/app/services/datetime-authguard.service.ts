import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DatetimeAuthguardService implements CanDeactivate {

  constructor(private router: Router) { }

  canDeactivate(route: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean {
    console.log(route);

    return true;

  }
}
