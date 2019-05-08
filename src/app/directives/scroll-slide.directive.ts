import {
  Directive,
  NgZone,
  ElementRef,
  Input,
  OnInit,
  OnDestroy
} from '@angular/core';

@Directive({
  selector: '[appScrollSlide]'
})
export class ScrollSlideDirective implements OnInit, OnDestroy {
  @Input('appScrollSlide') scrollType: string;
  @Input() className: string;

  constructor(private elemRef: ElementRef, private zone: NgZone) {}

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.windowScroll.bind(this), false);
    });
  }

  windowScroll() {
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    if (this.scrollType === 'opacity') {
      if (scroll >= 250) {
        this.elemRef.nativeElement.classList.add(this.className);
      } else {
        this.elemRef.nativeElement.classList.remove(this.className);
      }
    } else if (this.scrollType === 'transform') {
      this.elemRef.nativeElement.style.transform =
        'translate3d( 0,' + scroll / -2.5 + 'px, 0)';
      this.elemRef.nativeElement.style.opacity = 1 - scroll / 15 / 20;
    }
    // console.log(scroll);
  }
  ngOnDestroy() {
    window.removeEventListener('scroll', this.windowScroll, false);
  }
}
