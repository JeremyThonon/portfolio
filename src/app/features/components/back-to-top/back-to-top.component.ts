import { Component } from '@angular/core';
import { scrollToContent } from '../../../shared/components/menus/menu.conf';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrl: './back-to-top.component.scss',
})
export class BackToTopComponent {
  handleClick() {
    scrollToContent('#intro');
  }
}
