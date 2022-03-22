import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { ProfileComponent } from './profile/profile.component';
import { AttributionComponent } from './attribution/attribution.component';
import { LicenceDetailsComponent } from './licence-details/licence-details.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'profile',
    },
    {
        path: 'profile',
        component: ProfileComponent,
        data: { title : 'Profile' }
    },
    {
        path: 'licence',
        component: LicenceDetailsComponent,
        data: { title : 'Licence' }
    },
    {
        path: 'attribution',
        component: AttributionComponent,
        data: { title : 'Attribution' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutingModule { }