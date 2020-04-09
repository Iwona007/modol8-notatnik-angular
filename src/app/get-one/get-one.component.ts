import {Component, OnInit} from '@angular/core';
import {NoteBook} from '../app.component';
import {NoteBookService} from '../service/note-book.service';

@Component({
  selector: 'app-get-one',
  templateUrl: './get-one.component.html',
  styleUrls: ['./get-one.component.css']
})
export class GetOneComponent implements OnInit {

  noteBook: NoteBook;
  id: number;

  constructor(private noteBookService: NoteBookService) {
  }

  ngOnInit(): void {
    this.getById(this.id);
  }

  getById(id: number) {
    this.noteBookService.getById(this.id).subscribe((noteBook) => {
      this.noteBook = noteBook;
    });
  }
}
