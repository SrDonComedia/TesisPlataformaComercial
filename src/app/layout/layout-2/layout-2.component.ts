import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/commons/services/authentication.service';
import { WebsocketService } from 'src/app/commons/services/websocket.service';
import { AppState } from 'src/app/store/app.reducer';

import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-layout-2',
  templateUrl: './layout-2.component.html',
  styles: [':host { display: block; }', ':host ::ng-deep .layout-loading .sidenav-link { transition: none !important; }']
})
export class Layout2Component implements AfterViewInit, OnDestroy, OnInit {
  public initialized = false;

  private _subscription: Subscription;

  constructor(
    private layoutService: LayoutService,
    private _store: Store<AppState>,
    private _authenticationService: AuthenticationService,
    private webSocketService: WebsocketService,

  ) { }

  ngOnInit() {

    if (this._authenticationService.isLogin()) {
      // 
    }

    this._subscription = this._store.select('auth').subscribe(state => {
      if (state.logout) {
        this._authenticationService.logout();
      } else {
        //this.webSocketService.conectar();
      }
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.initialized = true;

      this.layoutService.init();
      this.layoutService.update();
      this.layoutService.setAutoUpdate(true);
    });
  }

  ngOnDestroy() {
    this.webSocketService.desconectar();
    this._subscription.unsubscribe();
    setTimeout(() => {
      this.layoutService.destroy();
    });
  }

  closeSidenav() {
    setTimeout(() => {
      this.layoutService.setCollapsed(true);
    });
  }
}
