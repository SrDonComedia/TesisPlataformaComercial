import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidenavModule } from 'src/vendor/libs/sidenav/sidenav.module';

import { NotFoundComponent } from '../not-found/not-found.component';
import { TextBtnComponent } from './components/text-btn/text-btn.component';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuard } from './services/guards/auth.guard';
import { LoginGuard } from './services/guards/login.guard';
import { RolAdminGuard } from './services/guards/rol-admin.guard';
import { JwtInterceptor } from './services/interceptors/jwt.interceptor';
import { TokenInterceptor } from './services/interceptors/token.interceptor';
import { UtilAlert } from './util/util.alert';
import { UtilFormating } from './util/util.formating';
import { UtilValidation } from './util/util.validation';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { BlockUIModule } from 'ng-block-ui';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { MiPerfilComponent } from './components/mi-perfil/mi-perfil.component';


@NgModule({
  declarations: [
    TextBtnComponent,
    NotFoundComponent,
    MiPerfilComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbDropdownModule,
    SidenavModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    BlockUIModule,
    MatTooltipModule,
    NgSelectModule,
    NgxExtendedPdfViewerModule
  ],
  providers: [
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    UtilFormating,
    UtilValidation,
    UtilAlert,
    LoginGuard,
    RolAdminGuard,
    AuthGuard,
  ],
  exports: [
    TextBtnComponent,
    NotFoundComponent,
    MiPerfilComponent
  ]

})
export class CommonsModule { }
