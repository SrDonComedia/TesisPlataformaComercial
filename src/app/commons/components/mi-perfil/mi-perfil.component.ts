import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.reducer';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styles: [
  ]
})
export class MiPerfilComponent implements OnInit, OnDestroy {

  public formPerfil: FormGroup;

  constructor(
    private auth: AuthenticationService
  ) { }


  ngOnInit(): void {

    this._crearFormulario();
    this._cargarFormConUsuario();
  }

  private _crearFormulario(): void {
    this.formPerfil = new FormGroup({
      nombre: new FormControl({ value: '', disabled: true }, Validators.required),
      correo: new FormControl({ value: '', disabled: true }, Validators.required),
      rut: new FormControl({ value: '', disabled: true }, Validators.required),
    });
  }

  private _cargarFormConUsuario(): void {
    this.formPerfil.setValue({
      nombre: this.auth.obtenerName(),
      correo: this.auth.obtenerEmail(),
      rut: this.auth.obtenerIdentificador()
    });
  }

  ngOnDestroy(): void {
  }
}
