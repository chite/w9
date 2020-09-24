import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  light = false;
  noteData = [
    { title: '0102-UIUX講義', content: 'AVSWDSASA', star: true },
    { title: '網頁設計講義', content: 'QWWEFDSXZ', star: false },
    { title: '網頁設計講義', content: 'QWWEFDSXZ', star: false },
    { title: '網頁設計講義', content: 'QWWEFDSXZ', star: false },
    { title: '網頁設計講義', content: 'QWWEFDSXZ', star: false },
    { title: '網頁設計講義', content: 'QWWEFDSXZ', star: false },
  ];
  turnLight() {
    this.light = !this.light;
  }
  addNote() {
    this.noteData.push({
      title: '請輸入筆記名稱',
      content: '',
      star: false,
    });
  }
  remove(index) {
    this.noteData.splice(index, 1);
  }
  handleStar(index) {
    this.noteData[index].star = !this.noteData[index].star;
  }
  editData(index, data){
    this.noteData[index] = data;
  }

  constructor() { }
}
