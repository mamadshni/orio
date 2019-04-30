import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { TimelineLite, Power3, Power1 } from 'gsap';
@Component({
  selector: 'app-overlay-menu',
  templateUrl: './overlay-menu.component.html',
  styleUrls: ['./overlay-menu.component.scss']
})
export class OverlayMenuComponent implements OnInit {
  menuElements: NodeList;
  isMenuOpened = false;
  @ViewChild('menu') set menu(menu: ElementRef) {
    this.menuElements = menu.nativeElement.querySelectorAll('li');
  }
  constructor() {}
  @Input() set isOpen(value: boolean) {
    if (value === false) {
      this.closeMenu();
    } else if (value) {
      this.openMenu();
    }
  }

  ngOnInit() {}

  openMenu() {
    this.isMenuOpened = true;
    const tl = new TimelineLite();
    tl.set(this.menuElements, { y: 60, opacity: 0 });
    this.menuElements.forEach((element, index) => {
      tl.to(
        element,
        0.3,
        { y: 0, opacity: 1, delay: 0.3, ease: Power3.easeOut },
        index * 0.1
      );
    });
  }

  closeMenu() {
    const delayTimeout = (this.menuElements.length - 1) * 50 + 250;
    const tl = new TimelineLite();
    this.menuElements.forEach((element, index) => {
      tl.to(
        element,
        0.25,
        { y: -80, opacity: 0, ease: Power1.easeIn },
        index * 0.05
      );
    });
    setTimeout(() => (this.isMenuOpened = false), delayTimeout);
  }
}
