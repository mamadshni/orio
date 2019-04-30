import { Directive, ElementRef, Input } from '@angular/core';

import { TweenMax, Power3, Power2 } from 'gsap';
@Directive({
  selector: '[appOverlaySlider]'
})
export class OverlaySliderDirective {
  isMenuOpened: boolean;
  @Input('appOverlaySlider') set isOpen(value: boolean) {
    if (value === false) {
      this.afterCloseMenu();
      this.isMenuOpened = false;
    } else if (value) {
      this.afterOpenMenu();
      this.isMenuOpened = true;
    } else {
      this.firstPossession();
      this.isMenuOpened = false;
    }
  }
  constructor(private elRef: ElementRef) {}

  firstPossession() {
    TweenMax.set(this.elRef.nativeElement, { y: 200, opacity: 0 });
    TweenMax.to(this.elRef.nativeElement, 0.5, {
      force3D: true,
      opacity: 1,
      y: 0,
      delay: 2.4,
      ease: Power2.easeOut
    });
  }

  default() {
    TweenMax.to(this.elRef.nativeElement, 0.5, {
      force3D: true,
      opacity: 1,
      y: 0,
      delay: 0.4,
      ease: Power2.easeOut
    });
  }

  afterOpenMenu() {
    TweenMax.to(this.elRef.nativeElement, 0.4, {
      force3D: true,
      opacity: 0,
      y: -150,
      delay: 0.1,
      ease: Power2.easeInOut
    });
    setTimeout(() => {
      TweenMax.set(this.elRef.nativeElement, { y: 200 });
    }, 500);
  }
  afterCloseMenu() {
    TweenMax.to(this.elRef.nativeElement, 0.4, {
      force3D: true,
      opacity: 1,
      y: 0,
      delay: 0.45,
      ease: Power3.easeOut
    });
  }
}
