import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardContentComponent,
        data: { title : 'Dashboard' }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DashboardRoutingModule { }