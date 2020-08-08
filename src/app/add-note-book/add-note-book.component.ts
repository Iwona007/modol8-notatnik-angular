import {Component, OnInit} from '@angular/core';
import {NoteBookService} from '../service/note-book.service';
import {NoteBook} from '../app.component';

@Component({
  selector: 'app-add-note-book',
  templateUrl: './add-note-book.component.html',
  styleUrls: ['./add-note-book.component.css']
})
export class AddNoteBookComponent implements OnInit {

  newNoteBook: NoteBook = new NewNoteBook();
  noteBook: NoteBook;

  constructor(private noteBookService: NoteBookService) {
  }

  ngOnInit(): void {
  }

  addNoteBook() {
    this.noteBookService.addNoteBook(this.newNoteBook).subscribe((noteBook) => {
      this.newNoteBook = noteBook;
      console.log(noteBook);
    },
      error => {
        console.log(error);
      });
  }
}

class NewNoteBook implements NoteBook {
  constructor() {
  }
}
