import { Component, Input, OnInit } from '@angular/core';
import * as data from '../../../../assets/json/left-nav-items.json';

@Component({
    selector: 'app-left-nav-bar',
    templateUrl: './left-nav-bar.component.html',
    styleUrls: ['./left-nav-bar.component.scss']
})

export class LeftNavBarComponent implements OnInit {

    navItems: any = (data as any).default;

    @Input() toggleLeftBar: boolean;

    constructor() { }

    ngOnInit(): void {
    }

    toggleNavItem(parent: any) {
        parent.showChildren = !parent.showChildren;
        /* to close opened navs once clicked on other nav item */
        this.navItems.forEach((element: any) => {
            if (parent.parentId != element.parentId) {
                element.showChildren = false;
            }
        });
    }

}