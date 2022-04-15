import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductRoutingModule } from './products.routing';

import { WidgetsModule } from '../../core/shared/widgets/widgets.module';

import { ProductsComponent } from './products/products.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { TelevisionComponent } from './television/television.component';
import { CamerasComponent } from './cameras/cameras.component';
import { WatchesComponent } from './watches/watches.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ProductRoutingModule,
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
    ],
})

export class ProductsModule { }

