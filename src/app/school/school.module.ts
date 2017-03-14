import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolComponent } from './school.component';
import { SchoolRoutingModule, routedComponents} from './school-router.module';

@NgModule({
  imports: [
    CommonModule, SchoolRoutingModule
  ],
  declarations: [routedComponents],
  providers:[],
  exports:[routedComponents],
  bootstrap: [SchoolComponent]
})
export class SchoolModule { }
