import { Component, OnInit } from '@angular/core';
import { links, scrollToContent } from '../menu.conf';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  animations: [
    trigger('visibility', [
      state(
        'visible',
        style({
          transform: 'translateY(0)',
          opacity: 1,
        })
      ),
      state(
        'hidden',
        style({
          transform: 'translateY(-100%)',
          opacity: 0,
        })
      ),
      transition('visible => hidden', animate('200ms ease-in-out')),
      transition('hidden => visible', animate('200ms ease-in-out')),
    ]),
  ],
})
export class MenuComponent implements OnInit {
  links = links;
  buttonLabel = 'Resume';
  allLinksMounted = false;

  handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
    }
  }

  handleClick = (id: string): void => {
    scrollToContent(id);
  };

  ngOnInit(): void {
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
  }
}
