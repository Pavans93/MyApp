import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomerRoutingModule } from './customer.routing';

import { WidgetsModule } from '../../core/shared/widgets/widgets.module';
import { WidgetServiceModule } from '../../core/shared/widgets/widgets-service.module';

import { AddCustomerComponent } from './add-customer/add-customer.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerMenuComponent } from './customer-menu/customer-menu.component';
import { OrderComponent } from './order/order.component';
import { PaymentsComponent } from './payments/payments.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CustomerRoutingModule,
        WidgetsModule,
        WidgetServiceModule
    ],

    declarations: [
        AddCustomerComponent,
        SearchCustomerComponent,
        CustomerDetailsComponent,
        CustomerMenuComponent,
        OrderComponent,
        PaymentsComponent,
    ],
})

export class CustomerModule { }

