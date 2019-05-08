import { HeaderMenuService } from './../../services/header-menu.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { menuSliderAnimation } from 'src/app/animations/menu-slider.animation';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  animations: [menuSliderAnimation()]
})
export class HeroSectionComponent implements OnInit, OnDestroy {
  isOpen = false;
  menuSliderSub: Subscription;
  imageUrl =
    'http://cdn.wonderfulengineering.com/wp-content/uploads/2014/07/background-wallpapers-32.jpg';

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
