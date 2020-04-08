import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  messageForUser: string;
  NoteBook;

  constructor() {
    // this.name = 'Iwona';
  }

  ngOnInit(): void {
  }

  sayHello(value: string) {
    this.messageForUser = 'hello ' + value;
  }

  save(value: string) {
    this.messageForUser = 'hello ' + value;
  }

}
