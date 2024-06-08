import { Component, OnDestroy, OnInit } from '@angular/core';
import { DecimalPipe, CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { AppService } from 'src/app/app.service';
import { AuthenticationService } from 'src/app/commons/services/authentication.service';

import { HomeService } from '../home/home.service';
import { ProductosModel } from '../home/productos.model';
import { ProductService } from './products.service';
import { CalificationProductModel } from './calificationProduct.model';

@Component({
    selector: 'app-products-index',
    templateUrl: './products.component.html',
    styleUrls: [
        '../../../vendor/styles/pages/authentication.scss'
    ],
    providers: [DecimalPipe], // Agrega DecimalPipe a los providers
})

export class ProductsComponent implements OnInit, OnDestroy {

    productoArray: ProductosModel;
    stars: string[] = [];
    stars_productos: any[] = [];
    array_calificationsProducts: CalificationProductModel;

    public height = 0;
    private token = '';
    private idSistema = '';
    public url = null;
    public mostrar = false;

    constructor(
        private appService: AppService,
        private authService: AuthenticationService,
        public sanitizer: DomSanitizer,
        private router: Router,
        private route: ActivatedRoute,
        private HomeService: HomeService,
        private decimalPipe: DecimalPipe,
        private ProductService: ProductService,
    ) {
        this.height = window.innerHeight;
        this.token = this.authService.obtenerToken();
        this.url = "http://localhost:4200/#/login/" + this.token;
    }

    ngOnDestroy() {
    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.productoArray = window.history.state.producto;
            console.log(this.productoArray);
        });

        this.ProductService.getCalificationsProducts().subscribe(result => {
            this.array_calificationsProducts = result;
            console.log("product online:",this.array_calificationsProducts);

            for (let calification of this.array_calificationsProducts.califications) {
                const roundedCalificationProducts = Math.round(parseFloat(calification.calification) * 2) / 2;
                let starsArray = [];
                // Llenar el array de estrellas según la calificación
                for (let i = 1; i <= 5; i++) {
                    if (i <= roundedCalificationProducts) {
                        starsArray.push(""); // Estrella completa
                    } else if (i - 0.5 === roundedCalificationProducts) {
                        starsArray.push("_half"); // Media estrella
                    } else {
                        starsArray.push("_border"); // Estrella vacía
                    }
                }
                // Almacenar el arreglo de estrellas en this.stars_productos para el producto actual
                if (!this.stars_productos[calification["Id"]]) {
                    this.stars_productos[calification["Id"]] = []; // Crear un nuevo arreglo si no existe
                }
                this.stars_productos[calification["Id"]] = starsArray;
            }
            console.log("STAR PRODUCTS: ",this.stars_productos);
        });

        const roundedCalification = Math.round(this.productoArray["calification"] * 2) / 2;

        // Llenar el array de estrellas según la calificación
        for (let i = 1; i <= 5; i++) {
            if (i <= roundedCalification) {
                this.stars.push(""); // Estrella completa
            } else if (i - 0.5 === roundedCalification) {
                this.stars.push("_half"); // Media estrella
            } else {
                this.stars.push("_border"); // Estrella vacía
            }
        }
    }

    formatPrice(price: string): string {
        const numericPrice = parseFloat(price);
        return this.decimalPipe.transform(numericPrice, '1.0-0', 'es-CL');
    }



}
