import { Component, HostBinding } from '@angular/core';

import { AppService } from '../../app.service';

@Component({
  selector: 'app-layout-footer',
  templateUrl: './layout-footer.component.html',
  styles: [':host { display: block; }']
})
export class LayoutFooterComponent {
  @HostBinding('class.layout-footer') hostClassMain = true;

  today = new Date();
  constructor(private appService: AppService) { }

  currentBg() {
    return `bg-${this.appService.layoutFooterBg}`;
  }
}
