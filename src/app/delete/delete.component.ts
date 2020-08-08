import {Component, OnInit} from '@angular/core';
import {NoteBookService} from '../service/note-book.service';
import {NoteBook} from '../app.component';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  noteBook: NoteBook;
  id: number;
  isNoteBookDelete = false;

  constructor(private noteBookService: NoteBookService) {
  }

  ngOnInit(): void {
  }

  deleteById(id: number) {
    this.noteBookService.deleteById(id).subscribe((noteBook) => {
      return this.noteBook = noteBook;
      console.log();
    });
    this.isNoteBookDelete = true;
  }
}
