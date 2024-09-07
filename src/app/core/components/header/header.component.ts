import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isMobile = false;
  scrolledBottom = false;
  scrolledTop = false;
  offsetTop = 0;

  constructor(
    private responsive: BreakpointObserver,
    private elementRef: ElementRef
  ) {}

  /**
   * @description Use to detect scroll event and manage visisbility of header
   */
  @HostListener('document:wheel', ['$event'])
  handleScroll() {
    if (
      this.elementRef.nativeElement.getBoundingClientRect().top !== 0 &&
      !this.isMobile
    ) {
      setTimeout(() => {
        this.offsetTop =
          this.elementRef.nativeElement.getBoundingClientRect().top;
      }, 100);

      this.scrolledBottom = true;
      this.scrolledTop = false;

      if (
        this.offsetTop <
        this.elementRef.nativeElement.getBoundingClientRect().top
      ) {
        setTimeout(() => {
          this.offsetTop =
            this.elementRef.nativeElement.getBoundingClientRect().top - 1;
        }, 100);

        this.scrolledBottom = false;
        this.scrolledTop = true;
      }
    } else if (
      this.elementRef.nativeElement.getBoundingClientRect().top === 0
    ) {
      this.scrolledTop = false;
    }
  }

  ngOnInit() {
    const { XSmall, Small } = Breakpoints;

    this.responsive.observe([XSmall, Small]).subscribe(result => {
      if (result.matches) {
        this.isMobile = result.matches;
      } else {
        this.isMobile = false;
      }
    });
  }
}
