import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderMenuService {
  isMenuOpened = new Subject<boolean>();
  constructor() {}
}
