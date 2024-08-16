import { Component } from '@angular/core';
import { links } from '../menu.conf';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrl: './menu-mobile.component.scss',
})
export class MenuMobileComponent {
  isOpen = false;
  links = links;
  buttonLabel = 'Resume';
  buttonDownload = true;

  toggleMenu = () => {
    this.isOpen = !this.isOpen;
  };
  handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleMenu();
    }
  }
}
