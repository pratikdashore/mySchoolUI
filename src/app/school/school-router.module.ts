import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchoolComponent } from './school.component';
import { SchoolInfoComponent } from './school-info/school-info.component';
import { SchoolFormComponent } from './school-form/school-form.component';

const routes: Routes = [
    {
        path: 'school',
        component: SchoolComponent,
        children: [
            {
                path: '',
                children: [
                    { path: 'info/:id', component: SchoolInfoComponent },
                    { path: 'form', component: SchoolFormComponent },
                    { path: 'edit/:id', component: SchoolFormComponent },
                ]
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SchoolRoutingModule { }

export const routedComponents = [SchoolComponent, SchoolInfoComponent, SchoolFormComponent];