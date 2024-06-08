import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { AuthenticationService } from 'src/app/commons/services/authentication.service';
import { UtilValidation } from 'src/app/commons/util/util.validation';
import { setAuthenticado } from 'src/app/store/actions/auth.actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-registro-form',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit, OnDestroy {

  public formularioRegistro: FormGroup;
  public loading = false;
  private _subscription: Subscription;

  public tipoDocumento = 'RUN';
  public placeholderTipoDocumento = 'Sin puntos y con guión (123456789-0)';


  constructor(
    private appService: AppService,
    private store: Store<AppState>,
    private authenticationService: AuthenticationService,
    private router: Router,
    private utilValidation: UtilValidation,
  ) {
    this.appService.pageTitle = 'Registro';
  }
  ngOnDestroy() {
    this._subscription.unsubscribe();
  }


  ngOnInit() {
    this.formularioRegistro = new FormGroup({
      rut: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      nombre: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
    });

    this._subscription = this.store.select('auth').subscribe(state => {
      this.loading = state.loading;

      if (state.authenticate && !state.logout) {
        this.router.navigate(['/home']);
      }

    });

    this.authenticationService.isLogin().then(
      (loEsta) => {
        if (loEsta) {
          this.store.dispatch(setAuthenticado({ usuario: this.authenticationService.obtenerUserName() }));
        }
      }
    );

  }

  registrar() {

    UtilValidation.setFormForValidate(this.formularioRegistro);
    if (this.formularioRegistro.valid && !this.loading) {
      // this.loading = true;
      // const usuario = this.formularioRegistro.controls.username.value;
      // const password = this.formularioRegistro.controls.password.value;
      // this.store.dispatch(autenticar({ usuario: { usuario: usuario, clave: password } }));
    }
  }


  cambiarTipoDocumento(tipoDocumento: string) {
    this.formularioRegistro.controls.rut.setValue("");
    this.tipoDocumento = tipoDocumento;
    if (this.tipoDocumento == 'RUN') {
      this.placeholderTipoDocumento = 'Sin puntos y con guión (123456789-0)';
      // this.formularioRegistro.controls.rut.setValidators([Validators.required, this.utilValidation.rutValido]);
      this.formularioRegistro.controls.rut.markAsUntouched();
    } else {
      this.placeholderTipoDocumento = 'Ingrese su pasaporte';
      this.formularioRegistro.controls.rut.setValidators([Validators.required]);
      this.formularioRegistro.controls.rut.markAsUntouched();
    }
  }



}
