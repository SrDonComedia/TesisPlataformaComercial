import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/commons/services/authentication.service';
import { LoginService } from 'src/app/paginas/oauth/login/login.service';

import * as appActions from '../actions/auth.actions';

@Injectable()
export class AuthEffects {

  @BlockUI() blockUIPage: NgBlockUI;
  constructor(
    private toasrtService: ToastrService,
    private actions$: Actions,
    private loginService: LoginService,
    private authenticationService: AuthenticationService,
  ) { }


  @Effect()
  authenticar$ = this.actions$.pipe(
    ofType(appActions.autenticar),
    switchMap(data => {
      const usuario: { usuario: string; clave: string; } = data['usuario'];
      return this.loginService.login(usuario.usuario, usuario.clave, 'ALUMNO').pipe(
        map(resul => {
          // console.log(resul);
          this.authenticationService.guardarStorage(resul);
          return appActions.autenticarSuccess({ respuesta: resul });
        }),
        catchError(error => {
          this.toasrtService.error('No se pudo autenticar, intentelo más tarde.', '', { disableTimeOut: true, closeButton: true, });
          return of(appActions.autenticarFail({ error: error }));
        })
      );
    })
  );

}
