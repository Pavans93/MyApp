import { Injectable } from '@angular/core';
import { CustomModalPopUpModel } from './custom-modal.model';

declare var $: any;

@Injectable({
    providedIn: 'root'
})

export class CustomModalPopUpService {

    private customPopUps = new Set<CustomModalPopUpModel>();

    constructor() {
    }

    _register(info: CustomModalPopUpModel): void {
        this.customPopUps.add(info);
    }

    _unregister(info: CustomModalPopUpModel): void {
        this.customPopUps.forEach(item => {
            if (item === info) {
                this.customPopUps.delete(item);
            }
        });
    }

    showHideMe(val: boolean, id: string, isrestricted: boolean) {
        if (isrestricted) {
            $(`#${id}`).modal({
                show: false,
                backdrop: 'static'
            });
        }
        if (val) {
            $(`#${id}`).modal('show');
        } else {
            $(`#${id}`).modal('hide');
            const body = document.getElementsByTagName('body')[0];
            body.classList.remove('newmodal-open');
        }
    }

    show(info: CustomModalPopUpModel) {
        $(`#${info.id}`).modal('show');
    }

    hide(info: CustomModalPopUpModel) {
        $(`#${info.id}`).modal('hide');
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('newmodal-open');
    }

    onshow(info: CustomModalPopUpModel) {
        $(`#${info.id}`).on('hidden.bs.modal', function (e: any) {
            const body = document.getElementsByTagName('body')[0];
            body.classList.remove('newmodal-open');
        });
    }

}