import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/service/auth.service';
import { navItems } from '../../container/nav';


@Component({
    selector: 'my-app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

    @Input() public toggleLeftEvent: any;

    constructor(
        private router: Router,
        private authService: AuthService,
    ) { }

    ngOnInit(): void {
    }

    toggleLeftNav() {
        this.toggleLeftEvent();
    }

    onLogout() {
        if (confirm("Are you sure you want to logout?") === true) {  //change to alert modal popup 
            this.authService.logout();
        }
    }

    public sidebarMinimized = false;
    public navItems = navItems;

    toggleMinimize(e: any) {
        this.sidebarMinimized = e;
    }

}