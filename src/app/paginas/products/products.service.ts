import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CalificationProductModel } from './calificationProduct.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient,
  ) { }

  public getCalificationsProducts(): Observable<CalificationProductModel> {
    return this.http.get<CalificationProductModel>(`./assets/json/productos_calification.json`);
  }
}
