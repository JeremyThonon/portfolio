import { Component } from '@angular/core';
import { links, scrollToContent } from '../menu.conf';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrl: './menu-mobile.component.scss',
  animations: [
    trigger('visibility', [
      state(
        'visible',
        style({
          transform: 'translateX(0)',
          opacity: 1,
        })
      ),
      state(
        'hidden',
        style({
          transform: 'translateX(100%)',
          opacity: 0,
        })
      ),
      transition('visible => hidden', animate('250ms ease-out')),
      transition('hidden => visible', animate('250ms ease-in')),
    ]),
  ],
})
export class MenuMobileComponent {
  isOpen = false;
  links = links;
  buttonLabel = 'Resume';
  allLinksMounted = false;

  toggleMenu = () => {
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      let timeout = 250;

      links.forEach(link => {
        setTimeout(() => {
          link.isMounted = true;

          if (links[links.length - 1].isMounted) {
            setTimeout(() => {
              this.allLinksMounted = true;
            }, 250);
          }
        }, timeout);

        timeout += 250;
      });
    } else {
      links.forEach(link => {
        link.isMounted = false;
      });

      this.allLinksMounted = false;
    }
  };

  handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleMenu();
    }
  }

  handleClick = (id: string): void => {
    scrollToContent(id);
  };
}
