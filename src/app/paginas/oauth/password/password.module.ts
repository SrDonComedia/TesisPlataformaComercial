import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PasswordStrengthBarModule } from 'ng2-password-strength-bar';
import { CommonsModule } from 'src/app/commons/commons.module';

import { PasswordIndexComponent } from './password-index/password-index.component';
import { PasswordRoutingModule } from './password-routing.module';


@NgModule({
  declarations: [PasswordIndexComponent],
  imports: [
    CommonModule,
    PasswordRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    CommonsModule,
    PasswordStrengthBarModule
  ]
})
export class PasswordModule { }
