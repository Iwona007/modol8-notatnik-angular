import {Component, OnInit} from '@angular/core';
import {NoteBookService} from '../service/note-book.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  // noteBook: NoteBook;
  id: number;
  isNoteBookDelete: boolean = false;

  constructor(private noteBookService: NoteBookService) {
  }

  ngOnInit(): void {
    this.deleteById(this.id);
  }

  deleteById(id: number) {
    this.noteBookService.deleteById(this.id).subscribe((noteBook) => {
      // return this.noteBook = noteBook;
      console.log();
    });
    this.isNoteBookDelete = true;

  }


}
