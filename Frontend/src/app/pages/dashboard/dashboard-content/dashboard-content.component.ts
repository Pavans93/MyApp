import { Component, OnInit } from '@angular/core';

import { AlertMessageService } from 'src/app/core/shared/widgets/alert-message/alert-message.service';
import { LoaderService } from '../../../core/shared/service/loader.service';

@Component({
    selector: 'app-dashboard-content',
    templateUrl: './dashboard-content.component.html',
    styleUrls: ['./dashboard-content.component.scss']
})

export class DashboardContentComponent implements OnInit {

    chartData: any = [
        {
            key: 'Books',
            value: 30,
        },
        {
            key: 'Journals',
            value: 30,
        },
        {
            key: 'Periodocals',
            value: 40,
        }
    ];

    constructor(
        private loader: LoaderService,
        private alert: AlertMessageService
    ) { }

    ngOnInit(): void {


    }
}
