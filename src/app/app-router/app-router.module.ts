import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/school' },
  //{ path: 'school', loadChildren: 'app/school/school.module#SchoolModule' },
  { path: '**', component: PageNotFoundComponent }
];



@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}

export const RoutableComponents = [
  PageNotFoundComponent
];
