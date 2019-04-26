import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  bgStroke = '#000';
  isOpen: boolean;
  open() {
    this.isOpen = this.isOpen === true ? false : true;
  }
}
