import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Toast, ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { AuthenticationService } from 'src/app/commons/services/authentication.service';
import { Util } from 'src/app/commons/util/util';
import { UtilAlert } from 'src/app/commons/util/util.alert';
import { UtilValidation } from 'src/app/commons/util/util.validation';
import { autenticar, setAuthenticado } from 'src/app/store/actions/auth.actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-login-form',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit, OnDestroy {

  public formularioLogin: FormGroup;
  public loading = false;
  private _subscription: Subscription;

  public tipoDocumento = 'RUN';

  constructor(
    private appService: AppService,
    private store: Store<AppState>,
    private authenticationService: AuthenticationService,
    private router: Router,
    private _activatedRoute: ActivatedRoute

  ) {
    this.appService.pageTitle = 'Login';
  }
  ngOnDestroy() {
    this._subscription.unsubscribe();
  }


  ngOnInit() {
    this.formularioLogin = new FormGroup({
      rut: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required)
    });

    this._subscription = this.store.select('auth').subscribe(state => {
      this.loading = state.loading;

      if (state.authenticate && !state.logout) {
        const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || 'home';
        // this.router.navigate(['/home']);
        // console.log(redirectURL);
        this.router.navigateByUrl(redirectURL);
      }

    });

    this.authenticationService.isLogin().then(
      (loEsta) => {
        if (loEsta) {
          // console.log("loesta");
          this.store.dispatch(setAuthenticado({ usuario: this.authenticationService.obtenerUserName() }));
        }
      }
    );

  }

  login() {

    UtilValidation.setFormForValidate(this.formularioLogin);
    if (this.formularioLogin.valid && !this.loading) {
      this.loading = true;
      let usuario = this.formularioLogin.controls.rut.value.toUpperCase();
      usuario = usuario.replaceAll('.','').replaceAll('-','');
      
      // console.log(usuario);
      const password = this.formularioLogin.controls.password.value;

      this.store.dispatch(autenticar({ usuario: { usuario: usuario, clave: password } }));


    }
  }

}
