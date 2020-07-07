import {Component, OnInit} from '@angular/core';
import {NoteBookService} from '../service/note-book.service';
import {NoteBook} from '../app.component';

@Component({
  selector: 'app-change-notice',
  templateUrl: './change-notice.component.html',
  styleUrls: ['./change-notice.component.css']
})
export class ChangeNoticeComponent implements OnInit {

  noticeToChange: NoteBook = new NoticeToChange();
  noteBook: NoteBook;

  constructor(private noteBookService: NoteBookService) {
  }

  ngOnInit(): void {
    // this.changNotice();
  }

  changNotice() {
    this.noteBookService.changeNotice(this.noticeToChange).subscribe((noteBook) => {
      this.noteBook = noteBook;
    });

  }
}

class NoticeToChange implements NoteBook {
  constructor() {
  }
}
