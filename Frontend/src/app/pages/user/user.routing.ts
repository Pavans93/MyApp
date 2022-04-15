import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { ProductsComponent } from './products/products.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { TelevisionComponent } from './television/television.component';
import { CamerasComponent } from './cameras/cameras.component';
import { WatchesComponent } from './watches/watches.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { AddressComponent } from './address/address.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {
        path: 'products',
        component: ProductsComponent,
        data: { title : 'Products' }
    },
    {
        path: 'mobiles',
        component: MobilesComponent,
        data: { title : 'Mobiles' }
    },
    {
        path: 'laptops',
        component: LaptopsComponent,
        data: { title : 'Laptops' }
    },
    {
        path: 'television',
        component: TelevisionComponent,
        data: { title : 'Television' }
    },
    {
        path: 'cameras',
        component: CamerasComponent,
        data: { title : 'Cameras' }
    },
    {
        path: 'watches',
        component: WatchesComponent,
        data: { title : 'Watches' }
    },
    {
        path: 'cart',
        component: CartComponent,
        data: { title : 'Cart' }
    },
    {
        path: 'profile',
        component: ProfileComponent,
        data: { title : 'Profile' }
    },
    {
        path: 'order-details',
        component: OrderDetailsComponent,
        data: { title : 'Order Details' }
    },
    {
        path: 'address',
        component: AddressComponent,
        data: { title : 'Address' }
    },
    {
        path: 'checkout',
        component: CheckoutComponent,
        data: { title : 'Checkout' }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutingModule { }