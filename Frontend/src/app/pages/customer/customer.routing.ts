import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { CustomerMenuComponent } from './customer-menu/customer-menu.component';
import { OrderComponent } from './order/order.component';
import { PaymentsComponent } from './payments/payments.component';

export const routes: Routes = [
    {
        path: '',
        component: CustomerMenuComponent,
        children: [
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
        // component: AddCustomerComponent,
        data: { title : 'Add Customer' }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CustomerRoutingModule { }