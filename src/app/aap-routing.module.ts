import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddNoticeComponent} from './add-notice/add-notice.component';
import {GetAllNoticeComponent} from './get-all-notice/get-all-notice.component';
import {GetOneNoticeComponent} from './get-one-notice/get-one-notice.component';
import {DeleteComponent} from './delete/delete.component';
import {EditComponent} from './edit/edit.component';
import {ChangeTitleComponent} from './change-title/change-title.component';


const routes: Routes = [
  {
    path: 'add-notice',
    component: AddNoticeComponent
  },
  {
    path: 'get-all-notice',
    component: GetAllNoticeComponent
  },
  {
    path: 'get-one-notice',
    component: GetOneNoticeComponent
  },
  {
    path: 'edit',
    component: EditComponent
  },
  {
    path: 'change-title',
    component: ChangeTitleComponent
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
