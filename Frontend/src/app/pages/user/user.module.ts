import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user.routing';

import { WidgetsModule } from '../../core/shared/widgets/widgets.module';

import { ProductsComponent } from './products/products.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { TelevisionComponent } from './television/television.component';
import { CamerasComponent } from './cameras/cameras.component';
import { WatchesComponent } from './watches/watches.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { CartComponent } from './cart/cart.component';
import { AddressComponent } from './address/address.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UserRoutingModule,
        WidgetsModule,
    ],

    declarations: [
        ProductsComponent,
        MobilesComponent,
        LaptopsComponent,
        TelevisionComponent,
        CamerasComponent,
        WatchesComponent,
        ProductDescriptionComponent,
        CartComponent,
        AddressComponent,
        OrderDetailsComponent,
        CheckoutComponent,
        ProfileComponent,
    ],
})

export class UserModule { }

