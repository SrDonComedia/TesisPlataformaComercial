import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-login-index',
  templateUrl: './login-index.component.html',
  styleUrls: [
    '../../../../../vendor/styles/pages/authentication.scss'
  ]

})
export class LoginIndexComponent implements OnInit, OnDestroy {


  // True   => Para ver el formulario de login
  // False  => Para ver el formulario de registro
  public showLoginComponent = true;
  constructor(
    private appService: AppService,
  ) {
    // this.appService.pageTitle = 'Login';
  }
  ngOnDestroy() {
  }


  ngOnInit() {


  }



}
