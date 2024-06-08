import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { setAuthenticado } from 'src/app/store/actions/auth.actions';
import { AppState } from 'src/app/store/app.reducer';
import { environment } from 'src/environments/environment';

import { RespuestaLogin } from '../interfaces/respuesta-login-interface';
import { UtilAlert } from '../util/util.alert';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public token = '';
  private refreshToken = '';
  public fin = 0;

  private refrescarPaginaLogin = false;

  constructor(
    public _http: HttpClient,
    public router: Router,
    private store: Store<AppState>,
    private alert: UtilAlert,
    private _activatedRoute: ActivatedRoute,
  ) {
    this.cargarStorage();
  }
  public cargarStorage() {
    this.token = '';
    if ((localStorage.getItem(this.btoaAuth('token'))) !== null &&
      (localStorage.getItem(this.btoaAuth('token'))) !== '' &&
      (localStorage.getItem(this.btoaAuth('token'))) !== undefined) {
      this.token = this._atobAuth(localStorage.getItem(this.btoaAuth('token')));
    }

    if ((localStorage.getItem(this.btoaAuth('refresh_token'))) !== null &&
      (localStorage.getItem(this.btoaAuth('refresh_token'))) !== '' &&
      (localStorage.getItem(this.btoaAuth('refresh_token'))) !== undefined) {
      this.refreshToken = this._atobAuth(localStorage.getItem(this.btoaAuth('refresh_token')));
    }

  }

  public generaHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', this.token);
  }
  public estaAutorizado() {

    if (this.token === null) {
      this.logout();
    } else if (this.token.trim().length === 0) {
      this.logout();
    }
    if (moment().isSameOrBefore(moment(this.fin)) && this.token.length > 120) {
      return true;
    } else {
      this.logout();
    }
  }

  public estaLogueado() {

    const promise = new Promise<boolean>((resolve) => {
      this.cargarStorage();
      if (this.token === null) {
        this.logout();
        resolve(false);
      }
      if (this.token.trim().length === 0) {
        this.logout();
        resolve(false);
      }
      if (moment().isSameOrBefore(moment(this.fin)) && this.token.trim().length > 120) {
        resolve(true);
      } else {
        this.logout();
        resolve(false);
      }
    });
    return promise;

  }
  public guardarStorage(respuesta: RespuestaLogin) {
    localStorage.setItem(this.btoaAuth('token'), this.btoaAuth(respuesta.access_token));
    localStorage.setItem(this.btoaAuth('refresh_token'), this.btoaAuth(respuesta.refresh_token));
    this.cargarStorage();
  }

  public setToken(token: string) {
    this.cargarStorage();
    if (this.token != '') {
      if (this.obtenerExpiracionToken(this.token) <= this.obtenerExpiracionToken(token)) {
        localStorage.setItem(this.btoaAuth('token'), this.btoaAuth(token));
        this.token = token;
      }
    } else {
      this.token = token;
      localStorage.setItem(this.btoaAuth('token'), this.btoaAuth(token));
    }
  }

  public isAuthenticated() {
    if (this.token === null) {
      return false;
    } else if (this.token.trim().length === 0) {
      return false;
    }
    if (this.token.length > 120 && moment().isSameOrBefore(moment.unix(this.obtenerExpiracionToken(this.token)))) {
      return true;
    } else {
      return false;
    }
  }

  public logout() {

    console.log('logout()');
    this.token = '';
    localStorage.removeItem(this.btoaAuth('token'));
    localStorage.removeItem(this.btoaAuth('refresh_token'));

    const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL')
    console.log(redirectURL);
    if (redirectURL == null) {
      this.router.navigate(['/']);
    }
  }

  public removeRefreshToken() {
    localStorage.removeItem(this.btoaAuth('refresh_token'));
  }

  public isAuthorized() {
    if (this.token === null) {
      // this.logout();
      return false;
    } else if (this.token.trim().length === 0) {
      // this.logout();
      return false;
    }
    if (this.token.length > 120 && moment().isSameOrBefore(moment.unix(this.obtenerExpiracionToken(this.token)))) {
      return true;
    } else {
      // this.logout();
      return false;
    }
  }

  public isLogin(): Promise<boolean> {
    console.log('Aqui se llama');
    const promise = new Promise<boolean>((resolve, reject) => {
      this.cargarStorage();
      if (this.token === null) {
        resolve(false);
        return;
      }
      if (this.token.trim().length === 0) {
        resolve(false);
        return;
      }
      if (this.token.length > 120 && moment().isSameOrBefore(moment.unix(this.obtenerExpiracionToken(this.token)))) {
        resolve(true);
      } else {
        this.refrescarPaginaLogin = true;
        resolve(false);
      }
    });
    return promise;
  }

  public esRol(id_role: string): boolean {
    this.cargarStorage();
    let payload = this.obtenerDatosToken(this.token);
    if (payload !== null && payload.authorities !== undefined) {
      // tslint:disable-next-line: prefer-for-of
      for (let index = 0; index < payload.authorities.length; index++) {
        if (payload.authorities[index] === id_role) {
          return true;
        }
      }
    }
    return false;
  }

  private obtenerDatosToken(accessToken: string): any {
    try {
      if (accessToken != null && accessToken !== '') {

        return JSON.parse(this.atou(accessToken.split(".")[1]));
      }
    } catch (error) {
      this.logout();
    }
    return '';
  }


  public obtenerToken() {
    return this.token;
  }

  private obtenerExpiracionToken(token: string): number {
    return this.obtenerDatosToken(token).exp;
  }
  private _obtenerUserName(token: string): string {
    return this.obtenerDatosToken(token).user_name;
  }
  public obtenerUserName(): string {
    return this._obtenerUserName(this.token);
  }

  public obtenerIdentificador(): string {
    return this.obtenerDatosToken(this.token).rut_pasaporte?.trim();
  }

  public obtenerName(): string {
    return this.obtenerDatosToken(this.token).nombre;
  }

  public obtenerRutPasaporte(): string {
    return this.obtenerDatosToken(this.token).rut_pasaporte;
  }

  public obtenerEmail(): string {
    return this.obtenerDatosToken(this.token).email?.trim();
  }

  public obtenerRole() {
    return this.obtenerDatosToken(this.token).authorities;
  }

  public obtenerExpirationDate(): number {
    return parseInt(this.obtenerDatosToken(this.token).exp + "000");
  }

  public getExpirationDateRefreshToken(): number {
    return parseInt(this.obtenerDatosToken(this.refreshToken).exp + "000");
  }


  public obtenerIdSistema() {
    return this._atobAuth(localStorage.getItem(this.btoaAuth('id_sistema')));
  }

  public setIdSistema(idSistema: string) {
    localStorage.setItem(this.btoaAuth('id_sistema'), this.btoaAuth(idSistema));
  }

  /**
   * Encripta un texto
   * @param value Texo a encriptar
   */
  public btoaAuth(value: string) {
    return btoa(value);
  }

  /**
   * Desencriptar un texto
   * @param value Texto a desencriptar
   */
  private _atobAuth(value: string) {
    try {
      return atob(value);
    } catch (error) {
      return null;
    }

  }


  public refrescarToken() {
    // console.log('refrescarToken()');

    if (!environment.production) {
      console.log('TODAY                            ', moment(moment(new Date()).toDate()).format("YYYY-MM-DD HH:mm:ss"));
      console.log("ExpirationDate() =>              ", moment(moment(this.obtenerExpirationDate()).toDate()).format("YYYY-MM-DD HH:mm:ss"));
      console.log("ExpirationDateRefreshToken() =>  ", moment(moment(this.getExpirationDateRefreshToken()).toDate()).format("YYYY-MM-DD HH:mm:ss"));
    }

    const url = `${environment.backend_url}oauth/token`;
    let bodyH: HttpParams;
    bodyH = new HttpParams()
      .set('grant_type', 'refresh_token')
      .set('refresh_token', this.refreshToken)
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8')
        .set('Authorization', 'Basic cG9ydGFsUGFnb0JhY2tlbmQ6N2IyYmIzZjMtNzk4ZC00N2IyLTkwY2UtNTkyZDE5Y2NlZGMw'),
      body: bodyH
    };
    return this._http.post<RespuestaLogin>(url, bodyH.toString(), options).subscribe(result => {
      this.guardarStorage(result);
      this.store.dispatch(setAuthenticado({ usuario: this.obtenerUserName() }));
    }, (_error) => {
      this.logout();
    });
  }

  // TODO: revisar si hay un metodo que remplace a escape(que está deprecado) y mover de este servicio
  // Sirve para decodificar base64 con caracteres especiales como tildes y ñ
  private atou(b64: string): string {
    return decodeURIComponent(escape(atob(b64)));
  }
}
