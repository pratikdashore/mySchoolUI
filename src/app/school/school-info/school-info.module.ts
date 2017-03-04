import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolFormComponent } from './school-form/school-form.component';
import { SchoolInfoComponent } from './school-info.component'; 

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SchoolFormComponent, SchoolInfoComponent],
  exports:[SchoolFormComponent, SchoolInfoComponent],
  bootstrap:[SchoolInfoComponent]
})
export class SchoolInfoModule { }
