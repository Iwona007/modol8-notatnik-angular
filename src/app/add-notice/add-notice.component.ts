import {Component, OnInit} from '@angular/core';
import {NoteBook} from '../app.component';
import {NoteService} from '../services/note.service';
import {valueReferenceToExpression} from '@angular/compiler-cli/src/ngtsc/annotations/src/util';

@Component({
  selector: 'app-add-notice',
  templateUrl: './add-notice.component.html',
  styleUrls: ['./add-notice.component.css']
})
export class AddNoticeComponent implements OnInit {

  newNotice: NoteBook = new NoteBookNotice();
  notice: NoteBook;

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {}

  addNote() {
    this.noteService.addNoteBook(this.newNotice).subscribe((notice) => {
      this.newNotice = notice;
      console.log(notice);
    });
  }
}

class NoteBookNotice implements NoteBook {
  constructor() {
  }
}
