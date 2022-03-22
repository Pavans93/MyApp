import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, TemplateRef } from '@angular/core';
import { IDGeneratorService } from '../../../shared/service/id-generator.service';
import { CustomModalPopUpService } from './custom-modal.service';
import { CustomModalPopUpModel } from './custom-modal.model';

@Component({
    selector: 'app-custom-modal',
    templateUrl: './custom-modal.component.html',
    styleUrls: ['./custom-modal.component.scss']
})

export class CustomModalComponent implements OnChanges, AfterViewInit, OnInit, OnDestroy {

    @Input() basicSetting: CustomModalPopUpModel;
    @Input() AlertType: any;
    @Input() template: TemplateRef<any>;
    @Output() modalAfterViewInIt = new EventEmitter();

    private isShowing: boolean;

    constructor(
        private cmpus: CustomModalPopUpService,
        private cdr: ChangeDetectorRef,
        private idGen: IDGeneratorService
    ) { }

    ngOnChanges(changes: SimpleChanges) {
        this.cdr.detectChanges();
    }

    ngOnInit() {
        this.errorChecking();
        this.basicSetting.id = this.idGen.generateNormalIDs('ModalPopUp');
        this.cmpus._register(this.basicSetting);
    }

    ngAfterViewInit() {
        this.cmpus.showHideMe(this.isShowing, this.basicSetting.id, this.basicSetting.isrestricted);
        this.modalAfterViewInIt.emit();
    }

    ngOnDestroy() {
        this.cmpus._unregister(this.basicSetting);
        const modal_backdrop: Element = document.getElementsByClassName('modal-backdrop')[0];
        if (modal_backdrop) {
            modal_backdrop.remove();
        }
    }

    @Input() get show(): boolean {
        return this.isShowing;
    }

    set show(val: boolean) {
        this.cmpus.showHideMe(val, this.basicSetting.id, this.basicSetting.isrestricted);
        this.isShowing = val;
    }

    errorChecking() {
        if (!this.basicSetting.title) {
            throw new Error('Pop up should have title');
        }
    }

}