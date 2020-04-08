import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AddNoticeComponent} from './add-notice/add-notice.component';
import {AapRoutingModule} from './aap-routing.module';
import {FormsModule} from '@angular/forms';
import {GetAllNoticeComponent} from './get-all-notice/get-all-notice.component';
import {NoteService} from './services/note.service';
import {GetOneNoticeComponent} from './get-one-notice/get-one-notice.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ChangeTitleComponent } from './change-title/change-title.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNoticeComponent,
    GetAllNoticeComponent,
    GetOneNoticeComponent,
    DeleteComponent,
    EditComponent,
    ChangeTitleComponent
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
