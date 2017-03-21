import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

tabLinks = [{url:'/school', display:'School'},{url:'/student', display:'Student'},{url:'/school', display:'School'},{url:'/student', display:'Student'},{url:'/school', display:'School'}];
  constructor() { }

  ngOnInit() {
  }

}
