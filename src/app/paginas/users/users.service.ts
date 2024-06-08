import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { OneProductosModel } from './one_productos.model';
import { OneUserModel } from './one_user.model';
import { CalificationUserModel } from './calificationUser.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  public getProductos(): Observable<OneProductosModel> {
    return this.http.get<OneProductosModel>(`./assets/json/productos.json`);
  }

  public getUsers(): Observable<OneUserModel> {
    return this.http.get<OneUserModel>(`./assets/json/users.json`);
  }

  public getCalificationsUsers(): Observable<CalificationUserModel> {
    return this.http.get<CalificationUserModel>(`./assets/json/user_calification.json`);
  }
}
