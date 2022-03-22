import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { TenantsComponent } from './tenants/tenants.component';
import { UsersComponent } from './users/users.component';
import { PermissionComponent } from './permission/permission.component';
import { TenantDetailsComponent } from './tenant-details/tenant-details.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'tenants',
    },
    {
        path: 'tenants',
        component: TenantsComponent,
        data: { title : 'Tenants' }
    },
    {
        path: 'users',
        component: UsersComponent,
        data: { title : 'Users' }
    },
    {
        path: 'permission',
        component: PermissionComponent,
        data: { title : 'Permissions' }
    },
    {
        path: 'tenant-details',
        component: TenantDetailsComponent,
        data: { title : 'Tenant Details' }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SetupRoutingModule { }