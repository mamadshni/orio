import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy,
  NgZone
} from '@angular/core';
@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit, OnDestroy {
  @ViewChild('hero_wrapper') heroWrapper: ElementRef;
  @ViewChild('image_wrapper') imageWrapper: ElementRef;
  zone: NgZone;
  constructor(zone: NgZone) {
    this.zone = zone;
  }
  imageUrl =
    'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/204180/aceef6d078c24ad92392b0ad066af923f2f96012.jpg';

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.windowScroll.bind(this), false);
    });
  }

  windowScroll() {
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    this.heroWrapper.nativeElement.style.transform =
      'translate3d( 0,' + scroll / -2.5 + 'px, 0)';
    this.heroWrapper.nativeElement.style.opacity = 1 - scroll / 15 / 20;
    if (scroll >= 250) {
      this.imageWrapper.nativeElement.style.opacity = 0;
    } else {
      this.imageWrapper.nativeElement.style.opacity = 1;
    }
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.windowScroll, false);
  }
}
