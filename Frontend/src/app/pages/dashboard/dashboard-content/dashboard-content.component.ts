import { Component, OnInit } from '@angular/core';

import { LoaderService } from '../../../core/shared/service/loader.service';

@Component({
    selector: 'app-dashboard-content',
    templateUrl: './dashboard-content.component.html',
    styleUrls: ['./dashboard-content.component.scss']
})

export class DashboardContentComponent implements OnInit {

    products: any[] = [
        {
            name: 'Apple Iphone 13',
            color: 'Black',
            rating : '4/5',
            price : '9,999/-',
            image: 'assets/img/download (1).jpg'
        },
        {
            name: 'Apple Iphone 13',
            color: 'Black',
            rating : '4/5',
            price : '9,999/-',
            image: 'assets/img/download (1).jpg'
        },
        {
            name: 'Apple Iphone 13',
            color: 'Black',
            rating : '4/5',
            price : '9,999/-',
            image: 'assets/img/download (1).jpg'
        },
        {
            name: 'Apple Iphone 13',
            color: 'Black',
            rating : '4/5',
            price : '9,999/-',
            image: 'assets/img/download (1).jpg'
        },
        {
            name: 'Apple Iphone 13',
            color: 'Black',
            rating : '4/5',
            price : '9,999/-',
            image: 'assets/img/download (1).jpg'
        },
        {
            name: 'Apple Iphone 13',
            color: 'Black',
            rating : '4/5',
            price : '9,999/-',
            image: 'assets/img/download (1).jpg'
        },
        {
            name: 'Apple Iphone 13',
            color: 'Black',
            rating : '4/5',
            price : '9,999/-',
            image: 'assets/img/download (1).jpg'
        },
        {
            name: 'Apple Iphone 13',
            color: 'Black',
            rating : '4/5',
            price : '9,999/-',
            image: 'assets/img/download (1).jpg'
        },
    ];

    constructor(
        private loader: LoaderService,
    ) { }

    ngOnInit(): void {


    }
}

