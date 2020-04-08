import { Component, OnInit } from '@angular/core';
import {NoteBook} from '../app.component';
import {NoteService} from '../services/note.service';

@Component({
  selector: 'app-get-one-notice',
  templateUrl: './get-one-notice.component.html',
  styleUrls: ['./get-one-notice.component.css']
})
export class GetOneNoticeComponent implements OnInit {

  noteBook: NoteBook;
  id: number;
  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.getById(this.id);
  }

  getById(id: number) {
    this.noteService.getById(this.id).subscribe((noteBook) => {
      this.noteBook = noteBook;
    });
  }
}
