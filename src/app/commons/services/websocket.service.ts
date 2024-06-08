import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Client } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { AppState } from 'src/app/store/app.reducer';
import { environment } from 'src/environments/environment';

import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private _path: string = environment.production ? '/portal-pago' : '/portal-pago-dev';

  private client: Client;
  constructor(
    private store: Store<AppState>,
    private auth: AuthenticationService,
    private router: Router,
    // private _snackBar: MatSnackBar
  ) {
    this.client = new Client();
    this.client.webSocketFactory = () => {
      return new SockJS(`${environment.backend_url}${environment.production ? 'portal-pago-websocket' : 'portal-pago-websocket-dev'}`, '',
        {
          transports: [
            'xhr-streaming',
            'websocket',
            'xhr-polling',
            'rfc6455',
            'hixie-76',
            'xhr-polling'
          ]
        });
    };

    this.client.onConnect = frame => {
      if (!environment.production) {
        console.log(`Conectado: ${this.client.connected} |  ${frame}`);
        console.log(auth.obtenerIdentificador());
      }
    };
    this.client.onDisconnect = frame => {
      if (!environment.production) {
        console.log(`Desconectado:   ${frame}`);
      }
    };
  }



  public conectar() {
    this.client.activate();
  }
  public desconectar() {
    if (this.client.connected) {
      this.client.deactivate();
    }
  }

}
