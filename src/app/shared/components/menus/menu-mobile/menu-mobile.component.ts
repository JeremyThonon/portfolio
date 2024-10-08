import { Component } from '@angular/core';
import { links } from '../menu.conf';
import { scrollToContent } from '../../../utils/scroll';
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
    trigger('links-animation', [
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
      transition('visible => hidden', animate('200ms ease-in-out')),
      transition('hidden => visible', animate('200ms ease-in-out')),
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
      let timeout = 200;

      links.forEach(link => {
        setTimeout(() => {
          link.isMounted = true;

          if (links[links.length - 1].isMounted) {
            setTimeout(() => {
              this.allLinksMounted = true;
            }, 200);
          }
        }, timeout);

        timeout += 200;
      });
    } else if (!this.isOpen) {
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
