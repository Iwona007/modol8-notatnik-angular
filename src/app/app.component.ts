import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'modo8-angular-notatnik';

}

export interface NoteBook {
  id?: number;
  title?: string;
  notice?: string;
  date?: string;
}
