import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es-CL';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { BlockUIModule } from 'ng-block-ui';
import { AvatarModule } from 'ngx-avatar';
import { ToastrModule } from 'ngx-toastr';

import { ThemeSettingsModule } from '../vendor/libs/theme-settings/theme-settings.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { extModules } from './build-specifics';
import { CommonsModule } from './commons/commons.module';
import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './paginas/home/home.module';
import { PasswordModule } from './paginas/oauth/password/password.module';
import { appReducers } from './store/app.reducer';
import { appEffect } from './store/effects';

registerLocaleData(localeES, 'es-CL');

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    CommonsModule,
    // App
    AppRoutingModule,
    LayoutModule,
    ThemeSettingsModule,

    // Libs
    ToastrModule.forRoot({
      preventDuplicates: true,
      closeButton: true,
      timeOut: 15000,
    }),
    ConfirmationPopoverModule.forRoot({
      cancelButtonType: 'default btn-sm',
      confirmButtonType: 'primary btn-sm'
    }),

    BlockUIModule.forRoot(),

    HomeModule,
    PasswordModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(appEffect),
    extModules,
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AvatarModule,

    // Material
    MatSliderModule,
    MatTableModule
  ],

  providers: [
    Title,
    AppService,
    {
      provide: LOCALE_ID, useValue: 'es-CL'
    },
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
