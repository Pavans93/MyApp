import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user.routing';

import { WidgetsModule } from '../../core/shared/widgets/widgets.module';
import { WidgetServiceModule } from '../../core/shared/widgets/widgets-service.module';

import { ProfileComponent } from './profile/profile.component';
import { LicenceDetailsComponent } from './licence-details/licence-details.component';
import { AttributionComponent } from './attribution/attribution.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UserRoutingModule,
        WidgetsModule,
        WidgetServiceModule
    ],

    declarations: [
        ProfileComponent,
        LicenceDetailsComponent,
        AttributionComponent
    ],
})

export class UserModule { }