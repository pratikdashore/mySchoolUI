import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html'
})
export class SchoolComponent implements OnInit {

  name : String = 'School Component';
  constructor() { }

  ngOnInit() {
  }

}
