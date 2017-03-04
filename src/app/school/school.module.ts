import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolInfoModule } from './school-info/school-info.module';
import { SchoolComponent } from './school.component';
@NgModule({
  imports: [
    CommonModule,
    SchoolInfoModule
  ],
  declarations: [SchoolComponent],
  exports:[SchoolComponent],
  bootstrap: [SchoolComponent]
})
export class SchoolModule { }
