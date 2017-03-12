import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolInfoModule } from './school-info/school-info.module';
import { SchoolComponent } from './school.component';
import { SchoolInfoService } from './school-info.service';

@NgModule({
  imports: [
    CommonModule,
    SchoolInfoModule
  ],
  declarations: [SchoolComponent],
  providers:[SchoolInfoService],
  exports:[SchoolComponent],
  bootstrap: [SchoolComponent]
})
export class SchoolModule { }
