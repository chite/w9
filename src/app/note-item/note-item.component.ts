import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {faStar as borderStar} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss']
})
export class NoteItemComponent implements OnInit {
  @Input() data;
  @Input() id: number;
  @Output() handleClick = new EventEmitter<{event: Event, id: number}>();
  faStar = faStar;
  borderStar = borderStar;
  constructor() { }

  clickStar(e:Event, id: number){
    e.stopPropagation()
    this.handleClick.emit({event: e, id: id});
  }

  ngOnInit(): void {
  }

}
