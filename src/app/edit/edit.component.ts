import {Component, OnInit} from '@angular/core';
import {NoteService} from '../services/note.service';
import {NoteBook} from '../app.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editNoteBook: NoteBook = new NoteBookNotice();
  noteBook: NoteBook;

  constructor(private noteService: NoteService) {
  }

  ngOnInit(): void {
  }

  editNotice() {
    this.noteService.editNotice(this.editNoteBook).subscribe((noteBook) => {
      this.noteBook = noteBook;
    });
  }
}

class NoteBookNotice implements NoteBook {
  constructor() {}
}
