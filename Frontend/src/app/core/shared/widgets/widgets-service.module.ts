import { NgModule } from '@angular/core';
import { IDGeneratorService } from '../service/id-generator.service';
import { CustomModalPopUpService } from './custom-modal/custom-modal.service';

@NgModule({
  providers: [
    CustomModalPopUpService,
    IDGeneratorService
  ]
})

export class WidgetServiceModule { }

