import { Component } from '@angular/core';

import { AlertMessageModel } from './alert-message.model';
import { AlertMessageService } from './alert-message.service';

declare var $: (arg0: string) => {
    (): any;
    new(): any;
    fadeIn: { (arg0: string | number): void; new(): any; };
    fadeOut: { (arg0: string | number): void; new(): any; };
};

@Component({
    selector: 'app-alert-message',
    templateUrl: './alert-message.component.html',
    styleUrls: ['./alert-message.component.scss']
})

export class AlertMessageComponent {

    id: string;
    alertType: any;
    msg: Array<string> = [];

    constructor(
        public alertService: AlertMessageService,
    ) {
        this.SubToAlertRxSub();
    }

    SubToAlertRxSub() {
        this.alertService.alertRxObs
            .subscribe((data: AlertMessageModel) => {
                this.alertType = data.type;
                this.msg = data.message;
                this.showMsgForDuration(this.id, data.timeToLive);
            });
    }

    showMsgForDuration(id: string, time: number = 3000) {
        this.fadeIn(id);
        setTimeout(() => {
            this.fadeOut(id);
        }, time);
    }

    fadeIn(id: string, durationInMilliseconds: number | string | 'slow' | 'fast' = 'slow') {
        $('#' + id).fadeIn(durationInMilliseconds);
    }

    fadeOut(id: string, durationInMilliseconds: number | string | 'slow' | 'fast' = 'slow') {
        $('#' + id).fadeOut(durationInMilliseconds);
    }

}