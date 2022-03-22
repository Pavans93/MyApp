import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard.routing';

import { WidgetsModule } from '../../core/shared/widgets/widgets.module';
import { WidgetServiceModule } from '../../core/shared/widgets/widgets-service.module';

import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DashboardRoutingModule,
        WidgetsModule,
        WidgetServiceModule,
    ],

    declarations: [
        DashboardContentComponent,
    ],

})

export class DashboardModule { }