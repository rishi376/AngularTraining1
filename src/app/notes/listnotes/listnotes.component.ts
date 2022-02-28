import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { INotes, Notes } from '../notes.model';
import { IGist, NoteserviceService } from '../noteservice.service';

@Component({
  selector: 'app-listnotes',
  templateUrl: './listnotes.component.html',
  styleUrls: ['./listnotes.component.css']
})
export class ListnotesComponent implements OnInit {
  notes?:INotes[];
  constructor(protected noteService : NoteserviceService) { }

  assignValues(){
    this.noteService.loadGist().subscribe({
      next: (res: HttpResponse<IGist[]>) => {
        this.notes = res.body?.map( gist => new Notes(gist.id, gist.url)) ?? [];
      },

      error: () => {
        console.log("error")
      },
    });
  }

  ngOnInit(): void {
    this.assignValues();
  }

}
