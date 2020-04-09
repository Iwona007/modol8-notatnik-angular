import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DeleteComponent} from './delete/delete.component';
import {EditComponent} from './edit/edit.component';
import {AddNoteBookComponent} from './add-note-book/add-note-book.component';
import {AllNoteBookComponent} from './all-note-book/all-note-book.component';
import {GetOneComponent} from './get-one/get-one.component';
import {ChangeNoticeComponent} from './change-notice/change-notice.component';


const routes: Routes = [
  {
    path: 'add-note-book',
    component: AddNoteBookComponent
  },
  {
    path: 'all-note-book',
    component: AllNoteBookComponent
  },
  {
    path: 'get-one',
    component: GetOneComponent
  },
  {
    path: 'edit',
    component: EditComponent
  },
  {
    path: 'change-notice',
    component: ChangeNoticeComponent
  },
  {
    path: 'delete',
    component: DeleteComponent
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AapRoutingModule { }
