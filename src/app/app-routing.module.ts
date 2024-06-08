import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Layout2Component } from './layout/layout-2/layout-2.component';
import { LayoutBlankComponent } from './layout/layout-blank/layout-blank.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  // Default
  // { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: '', component: LayoutBlankComponent, loadChildren: () => import('./paginas/oauth/login/login.module').then(m => m.LoginModule) },
  { path: 'home', component: Layout2Component, loadChildren: () => import('./paginas/home/home.module').then(m => m.HomeModule) },
  { path: 'users', component: Layout2Component, loadChildren: () => import('./paginas/users/users.module').then(m => m.UsersModule) },
  { path: 'products', component: Layout2Component, loadChildren: () => import('./paginas/products/products.module').then(m => m.ProductsModule) },

  { path: 'cambiar-password', component: LayoutBlankComponent, loadChildren: () => import('./paginas/oauth/password/password.module').then(m => m.PasswordModule) },
  // 404 Not Found page
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
