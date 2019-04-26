import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bg-line',
  templateUrl: './bg-line.component.html',
  styleUrls: ['./bg-line.component.scss']
})
export class BgLineComponent implements OnInit {
  @Input() strokeColor: string;
  constructor() {}

  ngOnInit() {}
}
