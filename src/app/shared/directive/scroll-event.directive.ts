import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appScrollEvent]',
})
export class ScrollEventDirective {
  @Output() scrolled = new EventEmitter<Event>();

  @HostListener('scroll', ['$event'])
  onScroll(event: Event) {
    this.scrolled.emit(event);
  }
}
