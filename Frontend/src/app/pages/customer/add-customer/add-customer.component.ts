import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CustomModalPopUpModel } from '../../../core/shared/widgets/custom-modal/custom-modal.model';
import { CustomModalPopUpService } from '../../../core/shared/widgets/custom-modal/custom-modal.service';
import { AlertMessageService } from 'src/app/core/shared/widgets/alert-message/alert-message.service';
import { LoaderService } from '../../../core/shared/service/loader.service';

@Component({
    selector: 'app-add-customer',
    templateUrl: './add-customer.component.html',
    styleUrls: ['./add-customer.component.scss']
})

export class AddCustomerComponent implements OnInit {

    customerAddressSetting: CustomModalPopUpModel = new CustomModalPopUpModel('Title', true, true, true);

    constructor(
        private router: Router,
        private loader: LoaderService,
        private alert: AlertMessageService,
        protected customModelPopup: CustomModalPopUpService
    ) { }

    ngOnInit() {
    }

    openModalWithComponent() {
        this.customModelPopup.show(this.customerAddressSetting);
    }

    showLoader() {
        this.loader.showLoader();
        setTimeout(() => {
            this.loader.hideLoader();
        }, 2000);
    }

    showSuccessAlert() {
        this.alert.showAlertSuccess(['Success']);
    }

    showDangerAlert() {
        this.alert.showAlertDanger(['Error']);
    }

}