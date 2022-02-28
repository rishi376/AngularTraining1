import { Component, OnInit } from '@angular/core';
import { INotes, Notes } from './notes.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes?: INotes[];
  constructor() { }
  ngOnInit(): void {
    
    }
   
  }
