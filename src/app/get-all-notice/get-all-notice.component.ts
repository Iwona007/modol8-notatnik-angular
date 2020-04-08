import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NoteBook} from '../app.component';
import {NoteService} from '../services/note.service';

@Component({
  selector: 'app-get-all-notice',
  templateUrl: './get-all-notice.component.html',
  styleUrls: ['./get-all-notice.component.css']
})
export class GetAllNoticeComponent implements OnInit {

  noteBooks: Array<NoteBook>;

  constructor(private noteService: NoteService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.noteService.getAll().subscribe((noteBooks) => {
      this.noteBooks = noteBooks;
      console.log(noteBooks);
    });
  }
}
