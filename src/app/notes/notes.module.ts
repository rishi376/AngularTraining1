import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { ListnotesComponent } from './listnotes/listnotes.component';
import { AddnotesComponent } from './addnotes/addnotes.component';


@NgModule({
  declarations: [
    AddnotesComponent,
    ListnotesComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule
  ]
})
export class NotesModule { }
