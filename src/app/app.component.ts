import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  // isMenuClosed = true;
  bgStroke = '#000';
  isOpen = false;
  open() {
    this.isOpen = this.isOpen === true ? false : true;
  }
  isMenuClosed(x: boolean) {
    // this.isOpen = false;
  }

  ngDoCheck() {
    console.log(1);
  }
}
