import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { SetupRoutingModule } from './setup.routing';

import { WidgetsModule } from '../../core/shared/widgets/widgets.module';
import { WidgetServiceModule } from '../../core/shared/widgets/widgets-service.module';

import { TenantsComponent } from './tenants/tenants.component';
import { UsersComponent } from './users/users.component';
import { PermissionComponent } from './permission/permission.component';
import { TenantDetailsComponent } from './tenant-details/tenant-details.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
        SetupRoutingModule,
        WidgetsModule,
        WidgetServiceModule,
    ],

    declarations: [
        TenantsComponent,
        UsersComponent,
        PermissionComponent,
        TenantDetailsComponent
    ],
})

export class SetupModule { }