import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss']
})

export class LoaderComponent implements OnInit {

    // @Input() show: any;

    // constructor(private spinner: NgxSpinnerService) { }

    ngOnInit() {
    }

    // ngOnChanges(changes: SimpleChanges) {
    //     if (this.show == 'true') {
    //         this.spinner.show(undefined, { fullScreen: true });
    //     } else {
    //         this.spinner.hide();
    //     }
    // }

}