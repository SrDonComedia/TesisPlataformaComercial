import { AfterViewInit, Component, HostBinding, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/commons/services/authentication.service';

import { AppService } from '../../app.service';
import { LayoutService } from '../layout.service';

export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  collapse?: string;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  type?: string;
}

// Menu Items
export let ROUTES: RouteInfo[] = [];
@Component({
  selector: 'app-layout-sidenav',
  templateUrl: './layout-sidenav.component.html',
  styles: [':host { display: block; }']
})
export class LayoutSidenavComponent implements AfterViewInit, OnInit {

  public menuItems: any[];

  public mostrarCurriculum: boolean = false;

  @Input() orientation = 'vertical';

  public height = 0;
  private token = '';
  private idSistema = '';
  public url = null;
  public mostrar = false;

  private manu: RouteInfo[] = [
    {
      path: '/home',
      title: 'Inicio',
      type: 'link',
      icontype: 'ion ion-ios-home',
    },
  ];

  @HostBinding('class.layout-sidenav') hostClassVertical = false;
  @HostBinding('class.layout-sidenav-horizontal') hostClassHorizontal = false;
  @HostBinding('class.flex-grow-0') hostClassFlex = false;

  constructor(
    private router: Router,
    private appService: AppService,
    private layoutService: LayoutService,
    private _authenticationService: AuthenticationService,
    private toasrtService: ToastrService,
    public sanitizer: DomSanitizer,
  ) {
    this.height = window.innerHeight;
    this.token = this._authenticationService.obtenerToken();
    this.url = "https://cudqa.uft.cl/#/login/" + this.token;
    // Set host classes
    this.hostClassVertical = this.orientation !== 'horizontal';
    this.hostClassHorizontal = !this.hostClassVertical;
    this.hostClassFlex = this.hostClassHorizontal;

  }

  ngAfterViewInit() {
    // Safari bugfix
    this.layoutService._redrawLayoutSidenav();
  }

  ngOnInit() {
    if (this._authenticationService.esRol('ROLE_ALUMNO')) {
      ROUTES = this.manu;
    } else {
      this._authenticationService.logout();
      this.toasrtService.error('No tiene los permisos necesarios para ingresar.', '', { disableTimeOut: true, closeButton: true, });
    }

    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  getClasses() {
    let bg = this.appService.layoutSidenavBg;

    if (this.orientation === 'horizontal' && (bg.indexOf(' sidenav-dark') !== -1 || bg.indexOf(' sidenav-light') !== -1)) {
      bg = bg
        .replace(' sidenav-dark', '')
        .replace(' sidenav-light', '')
        .replace('-darker', '')
        .replace('-dark', '');
    }

    return `${this.orientation === 'horizontal' ? 'container-p-x ' : ''} bg-${bg}`;
  }

  isActive(url: any) {
    // if (this.router.url === '/servicio/estudiantil/certificado/pago' && url === '/servicio/estudiantil/certificado') {
    //   return true;
    // }
    return url == this.router.url
  }

  isMenuActive(url: any) {
    return this.router.isActive(url, false);
  }

  isMenuOpen(url: any) {
    return this.router.isActive(url, false) && this.orientation !== 'horizontal';
  }

  toggleSidenav() {
    this.layoutService.toggleCollapsed();
  }
}
