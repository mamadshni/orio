import { HeaderMenuService } from './services/header-menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private headerMenuService: HeaderMenuService) {}

  bgStroke = '#000';
  isOpen = false;

  ngOnInit() {}

  open() {
    const open = this.isOpen === true ? false : true;
    this.headerMenuService.isMenuOpened.next(open);
    this.isOpen = open;
  }
}
