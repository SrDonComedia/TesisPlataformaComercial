import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import Swal from 'sweetalert2';

import { UtilAlert } from '../../util/util.alert';
import { AuthenticationService } from '../authentication.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    private auth: AuthenticationService,
    private _alert: UtilAlert,
    private toastr: ToastrService,
    private router: Router
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(tap((event: HttpEvent<any>) => { },
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401 && !err.url.endsWith('/oauth/token')) {
            this.toastr.error(err?.error?.message, '', { disableTimeOut: true });
            this._alert.errorSwal('Su sesión ha finalizado');
            this.auth.logout();
          }
          if (err.status === 403 && !err.url.endsWith('/oauth/token')) {
            console.log(err);

            this.toastr.error(err?.error?.message, '', { disableTimeOut: true });
            this._alert.errorSwal('No tienes Permisos para ejecutar esta operación');
            this.auth.logout();
          }
        }
      }));
  }
}
