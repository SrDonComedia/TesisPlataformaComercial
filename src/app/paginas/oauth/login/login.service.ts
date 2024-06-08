import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RespuestaLogin } from 'src/app/commons/interfaces/respuesta-login-interface';
import { AuthenticationService } from 'src/app/commons/services/authentication.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient,
    public router: Router,
    public authService: AuthenticationService) { }

    public login(username: string, password: string, userType: string) {
      const url = `${environment.backend_url}oauth/token`;
      let bodyH: HttpParams;
      bodyH = new HttpParams()
        .set('username', username)
        .set('password', password)
        .set('grant_type', 'password')
        .set('user_type', userType)
  
      const options = {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8')
          .set('Authorization', 'Basic cG9ydGFsUGFnb0JhY2tlbmQ6N2IyYmIzZjMtNzk4ZC00N2IyLTkwY2UtNTkyZDE5Y2NlZGMw'),
        body: bodyH
      };
      return this.http.post<RespuestaLogin>(url, bodyH.toString(), options);
    }
}