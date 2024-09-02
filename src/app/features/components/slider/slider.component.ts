import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  animations: [
    trigger('slide', [
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
          opacity: 0,
          transform: 'translateX(-100%)',
        })
      ),
      transition('visible => hidden', animate('300ms ease-in-out')),
      transition('hidden => visible', animate('300ms ease-in-out')),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  @Input() items = [{ title: '', company: '', date: '', content: [''] }];

  activeItem = { title: '', company: '', date: '', content: [''] };
  companyCopy = '';
  animate = true;

  triggerAnimation() {
    this.animate = true;
  }

  handleSelectedItem(index: number) {
    this.animate = false;
    this.activeItem = this.items[index];
    this.companyCopy = `@${this.activeItem.company} Belgium`;
    setTimeout(() => {
      this.triggerAnimation();
    }, 300);
  }

  ngOnInit(): void {
    this.activeItem = this.items?.[0];
    this.companyCopy = `@${this.activeItem.company} Belgium`;
  }
}
