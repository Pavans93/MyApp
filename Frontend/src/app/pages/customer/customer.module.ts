import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomerRoutingModule } from './customer.routing';

import { WidgetsModule } from '../../core/shared/widgets/widgets.module';

import { CustomerMenuComponent } from './customer-menu/customer-menu.component';
import { OrderComponent } from './order/order.component';
import { PaymentsComponent } from './payments/payments.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CustomerRoutingModule,
        WidgetsModule,
    ],

    declarations: [
        CustomerMenuComponent,
        OrderComponent,
        PaymentsComponent,
    ],
})

export class CustomerModule { }

