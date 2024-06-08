import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { UtilAlert } from '../../util/util.alert';
import { AuthenticationService } from '../authentication.service';

@Injectable()
export class RolAdminGuard implements CanActivate {
  constructor(
    public _authService: AuthenticationService,
    public router: Router,
    private _alert: UtilAlert
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this._authService.esRol('ROLE_ADMIN')) {
      return true;
    }
    this._alert.errorSwal('No tienes Permisos para ingresar a la página solicitada');
    return false;
  }
}
