import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddnotesComponent } from './notes/addnotes/addnotes.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path: 'notes', loadChildren: () => import('./notes/notes.module').then(m => m.NotesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
