import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-right-side-bar',
    templateUrl: './right-side-bar.component.html',
    styleUrls: ['./right-side-bar.component.scss']
})

export class RightSideBarComponent implements OnInit {

    @Input() public toggleRightEvent: any;
    @Input() public toggleRightBar: boolean;

    constructor() { }

    ngOnInit(): void {
    }

    toggleRightNav() {
        this.toggleRightEvent();
    }

}
