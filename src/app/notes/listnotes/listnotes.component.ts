import { Component, OnInit } from '@angular/core';
import { INotes, Notes } from '../notes.model';

@Component({
  selector: 'app-listnotes',
  templateUrl: './listnotes.component.html',
  styleUrls: ['./listnotes.component.css']
})
export class ListnotesComponent implements OnInit {
  notes?:INotes[];
  constructor() { }

  assignValues(){
    return [new Notes(1, "My First Note"), new Notes(2, "My second Note"), new Notes(3, "My Third Note"), new Notes(4, "My Fourth Note")];
  }

  ngOnInit(): void {
    this.notes = this.assignValues();
  }

}
