import {
  Directive,
  HostListener,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';

@Directive({
  selector: '[appScrollEvent]',
})
export class ScrollEventDirective {
  constructor(private elementRef: ElementRef) {}

  @Output() emitYOffset = new EventEmitter<number>();

  @HostListener('document:wheel')
  onScroll() {
    this.emitYOffset.emit(
      this.elementRef.nativeElement.getBoundingClientRect().top
    );
  }
}
