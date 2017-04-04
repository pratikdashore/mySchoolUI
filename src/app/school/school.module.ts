import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SchoolComponent } from './school.component';
import { SchoolRoutingModule, routedComponents } from './school-router/school-router.module';
import { SchoolSearchComponent } from './school-search/school-search.component';

@NgModule({
  imports: [
    CommonModule, SchoolRoutingModule, MaterialModule, FormsModule, HttpModule
  ],
  declarations: [routedComponents, SchoolSearchComponent],
  providers: [],
  exports: [routedComponents, SchoolSearchComponent],
  bootstrap: [SchoolComponent]
})
export class SchoolModule { }
