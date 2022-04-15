import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { ProductsComponent } from './products/products.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { TelevisionComponent } from './television/television.component';
import { CamerasComponent } from './cameras/cameras.component';
import { WatchesComponent } from './watches/watches.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {
        path: '',
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
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductRoutingModule { }