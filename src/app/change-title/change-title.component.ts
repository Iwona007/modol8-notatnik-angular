import {Component, OnInit} from '@angular/core';
import {NoteBook} from '../app.component';
import {NoteService} from '../services/note.service';

@Component({
  selector: 'app-change-title',
  templateUrl: './change-title.component.html',
  styleUrls: ['./change-title.component.css']
})
export class ChangeTitleComponent implements OnInit {
  titleToChange: NoteBook = new TitleToChange();
  noteBook: NoteBook;


  constructor(private noteService: NoteService) {
  }

  ngOnInit(): void {
    this.changText()
  }

  changText() {
    this.noteService.changeText(this.titleToChange).subscribe((noteBook) => {
      this.noteBook = noteBook;
    });

  }
}

class TitleToChange implements NoteBook {
  constructor() {
  }
}
