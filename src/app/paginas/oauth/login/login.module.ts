import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonsModule } from 'src/app/commons/commons.module';

import { LoginComponent } from './login-index/formulario-login/login.component';
import { RegistroComponent } from './login-index/formulario-registro/registro.component';
import { LoginIndexComponent } from './login-index/login-index.component';
import { LoginRoutingModule } from './login-routing.module';


@NgModule({
  declarations: [
    LoginIndexComponent,
    LoginComponent,
    RegistroComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    CommonsModule,
    NgbCarouselModule
  ]
})
export class LoginModule { }
