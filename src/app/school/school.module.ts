import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule, MatIconModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SchoolComponent } from './school.component';
import { SchoolRoutingModule, routedComponents } from './school-router/school-router.module';
import { SchoolSearchComponent } from './school-search/school-search.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, HttpModule, FlexLayoutModule, MatInputModule, MatIconModule, MatButtonModule, BrowserAnimationsModule, SchoolRoutingModule
  ],
  declarations: [routedComponents, SchoolSearchComponent],
  providers: [],
  exports: [routedComponents, SchoolSearchComponent],
  bootstrap: [SchoolComponent]
})
export class SchoolModule { }
