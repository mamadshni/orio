import { HeaderMenuService } from './../services/header-menu.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { menuSliderAnimation } from '../animations/menu-slider.animation';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [menuSliderAnimation()]
})
export class MainPageComponent implements OnInit, OnDestroy {
  isOpen = false;
  menuSliderSub: Subscription;

  constructor(private headerMenuService: HeaderMenuService) {}

  ngOnInit() {
    this.menuSliderSub = this.headerMenuService.isMenuOpened.subscribe(
      (condition: boolean) => (this.isOpen = condition)
    );
  }
  ngOnDestroy() {
    this.menuSliderSub.unsubscribe();
  }
}
