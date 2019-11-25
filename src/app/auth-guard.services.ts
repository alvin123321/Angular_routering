import { AuthService } from './auth.service';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()

// To control the access to the path
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private route: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated().then((auth: boolean) => {
      if (auth) {
        return true;
      } else {
        alert('access denied!');
        this.route.navigate(['/']);
      }
    });
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}
