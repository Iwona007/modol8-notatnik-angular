import {Component, OnInit} from '@angular/core';
import {NoteBookService} from '../service/note-book.service';
import {NoteBook} from '../app.component';

@Component({
  selector: 'app-all-note-book',
  templateUrl: './all-note-book.component.html',
  styleUrls: ['./all-note-book.component.css']
})
export class AllNoteBookComponent implements OnInit {

  noteBooks: Array<NoteBook>;
  constructor(private noteBookService: NoteBookService ) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.noteBookService.getAll().subscribe((noteBooks) => {
      this.noteBooks = noteBooks;
      console.log(noteBooks);
    });
  }
}
