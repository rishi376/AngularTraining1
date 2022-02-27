import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnotesComponent } from './addnotes/addnotes.component';
import { ListnotesComponent } from './listnotes/listnotes.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {path: 'list', component: ListnotesComponent},
    {path: 'add', component: AddnotesComponent}
  ])
],
  exports: [RouterModule]
})
export class NotesRoutingModule {
 }
