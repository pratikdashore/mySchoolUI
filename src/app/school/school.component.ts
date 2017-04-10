import { Component, OnInit } from '@angular/core';
import { SchoolInfoService} from './school-info.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html'
})
export class SchoolComponent implements OnInit {

  private schoolInfoService : SchoolInfoService;
  name : String = 'School Component ';
  constructor(SchoolInfoService : SchoolInfoService) {
    this.schoolInfoService = SchoolInfoService;
  }

  ngOnInit() {
   console.log(this.schoolInfoService);
}

}
