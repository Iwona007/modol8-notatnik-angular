import {Component, OnInit} from '@angular/core';
import {NoteBook} from '../app.component';
import {NoteBookService} from '../service/note-book.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editNoteBook: NoteBook = new NoteBookNotice();
  noteBook: NoteBook;

  constructor(private noteBookService: NoteBookService) {
  }

  ngOnInit(): void {
  }

  changeNoteBook() {
    this.noteBookService.changeNoteBook(this.editNoteBook).subscribe((noteBook) => {
      this.noteBook = noteBook;
    });
  }
}

class NoteBookNotice implements NoteBook {
  constructor() {
  }
}
