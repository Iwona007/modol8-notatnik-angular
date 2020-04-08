import {Component, OnInit} from '@angular/core';
import {NoteBook} from '../app.component';
import {NoteService} from '../services/note.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  // noteBook: NoteBook;
  id: number;
  isNoteBookDelete: boolean = false;

  constructor(private noteService: NoteService) {
  }

  ngOnInit(): void {
    this.deleteById(this.id);
  }

  deleteById(id: number) {
    this.noteService.deleteById(this.id).subscribe((noteBook) => {
      // return this.noteBook = noteBook;
      console.log();
    });
    this.isNoteBookDelete = true;

  }


}
