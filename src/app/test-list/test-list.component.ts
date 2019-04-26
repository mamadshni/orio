import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  HostBinding
} from '@angular/core';
import { TweenMax } from 'gsap';
@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss']
})
export class TestListComponent implements OnInit {
  @HostBinding('class.blur') isMenuOpened = true;
  @ViewChild('text') text: ElementRef;
  @Input()
  set isOpen(value: boolean) {
    if (value === false) {
      this.afterCloseMenu();
      this.isMenuOpened = false;
    } else if (value) {
      this.afterOpenMenu();
      this.isMenuOpened = true;
    }
  }
  constructor() {}

  ngOnInit() {
    this.default();
  }

  default() {
    TweenMax.to(this.text.nativeElement, 0.5, {
      force3D: true,
      opacity: 1,
      y: 0,
      delay: 0.4,
      ease: Power2.easeOut
    });
  }

  afterOpenMenu() {
    TweenMax.to(this.text.nativeElement, 0.4, {
      force3D: true,
      opacity: 0,
      y: -150,
      delay: 0.1,
      ease: Power2.easeInOut
    });
    setTimeout(() => {
      TweenMax.set(this.text.nativeElement, { y: 200 });
    }, 500);
  }
  afterCloseMenu() {
    TweenMax.to(this.text.nativeElement, 0.4, {
      force3D: true,
      opacity: 1,
      y: 0,
      delay: 0.45,
      ease: Power3.easeOut
    });
  }
}
