import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { AppService } from 'src/app/app.service';
import { AuthenticationService } from 'src/app/commons/services/authentication.service';

import { HomeService } from '../home.service';
import { ProductosModel } from '../productos.model';
import { UsersModel } from '../users.model';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: [
    '../../../../vendor/styles/pages/authentication.scss'
  ]
})
export class HomeIndexComponent implements OnInit, OnDestroy {

  public height = 0;
  private token = '';
  private idSistema = '';
  public url = null;
  public mostrar = false;

  array_productos: ProductosModel;
  array_users: UsersModel;
  itemSelected: number = 0;
  selectedCategory: string = 'todos';
  searchText: string = '';

  constructor(
    private appService: AppService,
    private authService: AuthenticationService,
    public sanitizer: DomSanitizer,

    private HomeService: HomeService,
    private router: Router,

  ) {
    this.height = window.innerHeight;
    this.token = this.authService.obtenerToken();
    this.url = "http://localhost:4200/#/login/" + this.token;

  }
  ngOnDestroy() {
  }

  ngOnInit(): void {
    this.obtenerInformacion();
  }

  obtenerInformacion() {
    this.HomeService.getProductos().subscribe(result => {
      this.array_productos = result;
      console.log(this.array_productos)
    });
    this.HomeService.getUsers().subscribe(result2 => {
      this.array_users = result2;
      console.log(this.array_users)
    });
  }

  getUserIndex(userId: string): number {
    return this.array_users.users.findIndex(user => user.id === userId);
  }

  redirectToUsersPage(usuario: UsersModel) {
    // Aquí puedes navegar a la página deseada y pasar la información que necesitas
    this.router.navigate(['./users'], { state: { usuario } });
  }

  redirectToProductsPage(producto: ProductosModel) {
    // Aquí puedes navegar a la página deseada y pasar la información que necesitas
    this.router.navigate(['./products'], { state: { producto } });
  }

  


  filterProducts(category: string): ProductosModel {
    this.selectedCategory = category;
    if (this.searchText.trim() == '') {
      // Si el campo de búsqueda está vacío, simplemente filtra por categoría
      if (this.selectedCategory == 'todos') {
        return this.array_productos;
      }
      else {
        const filteredProducts = this.array_productos.productos.filter(producto => producto.tipo === category);
        return { productos: filteredProducts.map(producto => ({ ...producto })) };
      }

    } else {
      if (this.selectedCategory=='todos'){
        // Si se ingresa texto en el campo de búsqueda, filtra por nombre y categoría
        const filteredProducts = this.array_productos.productos.filter(producto => producto.name.toLowerCase().includes(this.searchText.toLowerCase()));
          return { productos: filteredProducts.map(producto => ({ ...producto })) };
      }
      else{
        // Si se ingresa texto en el campo de búsqueda, filtra por nombre y categoría
        const filteredProducts = this.array_productos.productos.filter(producto =>
          producto.tipo == this.selectedCategory && producto.name.toLowerCase().includes(this.searchText.toLowerCase()));
          return { productos: filteredProducts.map(producto => ({ ...producto })) };
      }
      
    }
  }

  filteredProducts(): ProductosModel {
    return this.filterProducts(this.selectedCategory);
  }

  isButtonActive: string = 'todos';

  toggleButton(category: string): void {
    // Realiza el filtrado de productos
    this.filterProducts(category);
    // Cambia el estado del botón activo
    this.isButtonActive = this.isButtonActive == category ? '' : category;
  }
  
  
}
