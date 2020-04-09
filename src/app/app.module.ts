import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AapRoutingModule} from './aap-routing.module';
import {FormsModule} from '@angular/forms';
import {DeleteComponent} from './delete/delete.component';
import {EditComponent} from './edit/edit.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AddNoteBookComponent} from './add-note-book/add-note-book.component';
import {AllNoteBookComponent} from './all-note-book/all-note-book.component';
import {GetOneComponent} from './get-one/get-one.component';
import {ChangeNoticeComponent} from './change-notice/change-notice.component';

@NgModule({
  declarations: [
    AppComponent,
    DeleteComponent,
    EditComponent,
    AddNoteBookComponent,
    AllNoteBookComponent,
    GetOneComponent,
    ChangeNoticeComponent
  ],
  imports: [
    BrowserModule,
    AapRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,

  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent, ]
})
export class AppModule { }
