import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatSidenavModule, MatIconModule, MatButtonModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { AppComponent } from './app.component';
import { SchoolModule } from './school/school.module';
import { AppRouterModule, RoutableComponents } from './app-router/app-router.module';
import { SchoolInfoService } from './school/school-info.service';
import { HeaderComponent } from './nav/header/header.component';
import { FooterComponent } from './nav/footer/footer.component';
import { LeftContainerComponent } from './nav/left-container/left-container.component';
import { RightContainerComponent } from './nav/right-container/right-container.component';
@NgModule({
  declarations: [
    AppComponent, RoutableComponents, HeaderComponent, FooterComponent, LeftContainerComponent, RightContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatSidenavModule, MatIconModule, MatButtonModule, MatInputModule, BrowserAnimationsModule,
    FlexLayoutModule,
    SchoolModule,
    AppRouterModule
  ],
  providers: [SchoolInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
