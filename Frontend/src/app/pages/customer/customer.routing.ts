import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { CustomerMenuComponent } from './customer-menu/customer-menu.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { OrderComponent } from './order/order.component';
import { PaymentsComponent } from './payments/payments.component';

export const routes: Routes = [
    {
        path: '',
        component: CustomerMenuComponent,
        children: [
            {
                path: 'customer-details',
                component: CustomerDetailsComponent,
                data: { title : 'Customer Details' }
            },
            {
                path: 'orders',
                component: OrderComponent,
                data: { title : 'Orders' }
            },
            {
                path: 'payments',
                component: PaymentsComponent,
                data: { title : 'Payments' }
            },
        ]
    },
    {
        path: 'add-customer',
        component: AddCustomerComponent,
        data: { title : 'Add Customer' }
    },
    {
        path: 'search-customer',
        component: SearchCustomerComponent,
        data: { title : 'Search Customer' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CustomerRoutingModule { }