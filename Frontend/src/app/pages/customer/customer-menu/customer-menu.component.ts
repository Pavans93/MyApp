import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertMessageService } from 'src/app/core/shared/widgets/alert-message/alert-message.service';
import { LoaderService } from '../../../core/shared/service/loader.service';

import * as data from '../../../../assets/json/customer-tabs.json';

@Component({
    selector: 'app-customer-menu',
    templateUrl: './customer-menu.component.html',
    styleUrls: ['./customer-menu.component.scss']
})

export class CustomerMenuComponent implements OnInit {

    tabList: any = (data as any).default;
    selectedTab: any;

    constructor(
        private router: Router,
        private loader: LoaderService,
        private alert: AlertMessageService,
    ) { }

    ngOnInit() {
    }

    openTab(tab: any) {
        this.selectedTab = tab.id;
        this.router.navigate(tab.routerLink);
    }

}