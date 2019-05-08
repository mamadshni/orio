// tslint:disable:use-host-property-decorator
import { Component, OnInit } from '@angular/core';
import { menuItemsAnimation } from '../animations/menu-items.animation';
@Component({
  selector: 'app-overlay-menu',
  templateUrl: './overlay-menu.component.html',
  styleUrls: ['./overlay-menu.component.scss'],
  animations: [menuItemsAnimation()],
  host: {
    '[@menuListAnimation]': ''
  }
})
export class OverlayMenuComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  // closeMenu() {
  //   const delayTimeout = (this.menuItems.length - 1) * 50 + 250;
  //   const tl = new TimelineLite();
  //   this.menuItemsElem.forEach(this.leaveMenuItemAnim(tl));
  //   setTimeout(() => (this.isMenuOpened = false), delayTimeout);
  // }

  // private get menuItemsElem() {
  //   return this.menuItems.map(item => item.nativeElement);
  // }
}
