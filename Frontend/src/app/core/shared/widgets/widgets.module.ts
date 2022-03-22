import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomModalComponent } from './custom-modal/custom-modal.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TabsComponent } from './tabs/tabs.component';
import { ChartsComponent } from './charts/charts.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],

  declarations: [
    CustomModalComponent,
    DatepickerComponent,
    DropdownComponent,
    TabsComponent,
    ChartsComponent
  ],

  exports: [
    CustomModalComponent,
    DatepickerComponent,
    DropdownComponent,
    TabsComponent,
    ChartsComponent,
  ]
})

export class WidgetsModule { }

