import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-footer1',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

    appVersion: any = environment.VERSION;

    constructor() { }

    ngOnInit(): void {
    }

}