import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginIndexComponent } from './login-index/login-index.component';


const routes: Routes = [
  {
    path: '',
    component: LoginIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
