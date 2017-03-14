import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { SchoolModule } from './school/school.module';
import { AppRouterModule, RoutableComponents } from './app-router/app-router.module';
import { SchoolInfoService } from './school/school-info.service';
@NgModule({
  declarations: [
    AppComponent, RoutableComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    SchoolModule,
    AppRouterModule
  ],
  providers: [SchoolInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
