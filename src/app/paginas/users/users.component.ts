import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { AppService } from 'src/app/app.service';
import { AuthenticationService } from 'src/app/commons/services/authentication.service';

import { HomeService } from '../home/home.service';
import { OneUserModel } from './one_user.model';
import { OneProductosModel } from './one_productos.model';
import { CalificationUserModel } from './calificationUser.model';
import { UserService } from './users.service';

@Component({
    selector: 'app-users-index',
    templateUrl: './users.component.html',
    styleUrls: [
        '../../../vendor/styles/pages/authentication.scss'
    ]
})

export class UsersComponent implements OnInit, OnDestroy {

    stars: string[] = [];
    stars_productos: any[] = [];
    array_productos: OneProductosModel;
    array_calificationsUser: CalificationUserModel;

    public height = 0;
    private token = '';
    private idSistema = '';
    public url = null;
    public mostrar = false;

    public usuarioArray: OneUserModel;
    public calificationUserArray: CalificationUserModel;

    constructor(
        private appService: AppService,
        private authService: AuthenticationService,
        public sanitizer: DomSanitizer,
        private router: Router,
        private route: ActivatedRoute,
        private HomeService: HomeService,
        private UserService: UserService,
    ) {
        this.height = window.innerHeight;
        this.token = this.authService.obtenerToken();
        this.url = "http://localhost:4200/#/login/" + this.token;
    }

    ngOnDestroy() {
    }

    ngOnInit() {
        this.HomeService.getProductos().subscribe(result => {
            this.array_productos = result;
            console.log(this.array_productos)
        });

        this.UserService.getCalificationsUsers().subscribe(result => {
            this.array_calificationsUser = result;
            console.log("product online:",this.array_calificationsUser);

            for (let calification of this.array_calificationsUser.califications) {
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

        // Accede al estado del enrutador para obtener la información del usuario
        this.route.paramMap.subscribe(params => {
            this.usuarioArray = window.history.state.usuario;
            console.log('Información del usuario:', this.usuarioArray);
        });

        // Redondear la calificación a la mitad más cercana
        const roundedCalification = Math.round(this.usuarioArray["calification"] * 2) / 2;

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

    redirectToProductsPage(producto: OneProductosModel) {
        // Aquí puedes navegar a la página deseada y pasar la información que necesitas
        this.router.navigate(['./products'], { state: { producto } });
    }
}
