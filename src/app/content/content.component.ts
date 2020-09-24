import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../note.service';
import {
  faLessThan,
  faEllipsisH,
  faImage,
  faFont,
  faReply,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  faLessThan = faLessThan;
  faEllipsisH = faEllipsisH;
  faImage = faImage;
  faFont = faFont;
  faReply = faReply;
  light: boolean;
  userData: { title: string; content: string; star: boolean };
  id: Number;
  constructor(private route: ActivatedRoute, private notes: NoteService) {}

  writingNode(e: Event, type: string) {
    const newData = { ...this.userData };
    const target = e.target as HTMLTextAreaElement;
    if (type == 'title') {
      newData.title = target.value;
    } else if (type == 'content') {
      newData.content = target.value;
    }
    this.notes.editData(this.id, newData);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.userData = this.notes.noteData[+params.get('id')];
      this.light = this.notes.light;
      this.id = +params.get('id');
    });
  }
}
