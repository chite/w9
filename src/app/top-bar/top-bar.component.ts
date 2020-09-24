import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  faMoon,
  faSun,
  faStar,
  faTrash,
  faShareAlt,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
    @Input() light: boolean;
    @Output() setLight = new EventEmitter();
    @Output() setTrash = new EventEmitter();
    @Output() setFilter = new EventEmitter();
  faMoon = faMoon;
  faSun = faSun;
  faStar = faStar;
  faTrash = faTrash;
  faShareAlt = faShareAlt;
  constructor() {}
  ngOnInit() {}
}
