import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductosModel } from './productos.model';
import { UsersModel } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient,
  ) { }

  public getProductos(): Observable<ProductosModel> {
    return this.http.get<ProductosModel>(`./assets/json/productos.json`);
  }

  public getUsers(): Observable<UsersModel> {
    return this.http.get<UsersModel>(`./assets/json/users.json`);
  }

}
