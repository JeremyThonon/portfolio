import { Component } from '@angular/core';
import{ links } from '../menu.conf';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrl: './menu-mobile.component.scss'
})
export class MenuMobileComponent {
  isOpen: boolean = false;
  links: Array<any> = links;

  toggleMenu = () => {
    this.isOpen = !this.isOpen;
  }
}
