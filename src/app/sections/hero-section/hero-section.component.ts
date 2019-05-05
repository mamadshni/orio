import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {
  @Input() isOpen: boolean;
  constructor() {}
  imageUrl =
    'http://cdn.wonderfulengineering.com/wp-content/uploads/2014/07/background-wallpapers-32.jpg';

  ngOnInit() {}
}
