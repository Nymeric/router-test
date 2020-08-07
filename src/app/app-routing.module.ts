import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TableComponent} from './tables/table/table.component';
import {SecondTableComponent} from './tables/second-table/second-table.component';

const routes: Routes = [{
  path: '',
  component: TableComponent
}, {
  path: 'second-table',
  component: SecondTableComponent
}, {
  path: '**',
  redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
