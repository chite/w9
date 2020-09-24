import { Component, OnInit } from '@angular/core';
import { faBookmark, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

import { NoteService } from './note.service';

interface NoteDataType{
  title: string,
  content: string,
  star: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  faBookmark = faBookmark;
  faPlus = faPlus;
  chosen = -1;
  filter = false;
  noteData: NoteDataType[];

  constructor(private router: Router, public notes: NoteService) {}

  filterStar() {
    this.filter = !this.filter;
    if(this.filter){
      this.noteData = this.noteData.filter(val=>val.star);
    }else{
      this.noteData = this.notes.noteData;
    }
  }

  deleteNote(){
    if(~this.chosen){
      this.notes.remove(this.chosen);
      this.chosen = -1;
    }
  }

  toggleBg(){
    this.notes.turnLight();
  }
  
  clickStar(data){
    data.event.stopPropagation()
    this.notes.noteData[data.id].star = !this.notes.noteData[data.id].star;
  }

  clickNote(index: number) {
    if(this.chosen == index){
      this.router.navigate(['note/' + index]);
    }else{
      this.chosen = index;
    }
  }
  addNote() {
    this.notes.addNote();
  }
  ngOnInit() {
    this.noteData = this.notes.noteData;
  }
}
