import { Component, HostBinding, Input, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { resultMemoize, Store } from '@ngrx/store';
import { AuthenticationService } from 'src/app/commons/services/authentication.service';
import { logout } from 'src/app/store/actions/auth.actions';
import { AppState } from 'src/app/store/app.reducer';

import { AppService } from '../../app.service';
import { LayoutService } from '../../layout/layout.service';
import { Subscription } from 'rxjs';
import { time, timeStamp } from 'console';

@Component({
  selector: 'app-layout-navbar',
  templateUrl: './layout-navbar.component.html',
  styles: [':host { display: block; }']
})
export class LayoutNavbarComponent {
  isExpanded = false;
  isRTL: boolean;

  @Input() sidenavToggle = true;

  @HostBinding('class.layout-navbar') hostClassMain = true;

  public nombreUsuario: string = 'USER';

  public isSmallScreen = window.innerWidth <= 768;
  private modalRef: NgbModalRef;

  private _subcriptionUsuario: Subscription;

  @ViewChild('miPerfilModal', { static: false }) miPerfilModal: any;

  constructor(
    private appService: AppService,
    private layoutService: LayoutService,
    private _store: Store<AppState>,
    private modalService: NgbModal,
    private auth: AuthenticationService,
  ) {
    this.isRTL = appService.isRTL;
  }

  ngOnInit(): void {
    this.nombreUsuario = this.auth.obtenerName();
    if (this.nombreUsuario == null || this.nombreUsuario.length == 0) {
      this.nombreUsuario = 'USER';
    }
  }

  currentBg() {
    return `bg-${this.appService.layoutNavbarBg}`;
  }

  toggleSidenav() {
    this.layoutService.toggleCollapsed();
  }

  miPerfil() {
    this.modalRef = this.modalService.open(this.miPerfilModal, { size: 'md', backdrop: 'static', keyboard: true, centered: true });
  }

  closeBtn(): void {
    this.modalRef.close();
  }

  logout() {
    this._store.dispatch(logout());
    this._subcriptionUsuario?.unsubscribe();
    this.auth.logout();
  }
}
