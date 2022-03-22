import { Component, OnInit } from '@angular/core';
import { SessionIdleService } from '../../core/shared/service/session-idle.service';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.scss']
})

export class ContainerComponent implements OnInit {

    toggleLeftBar: boolean = true;
    toggleRightBar: boolean = false;

    constructor(
        private sessionIdleService: SessionIdleService
    ) { }

    ngOnInit(): void {
        // Session Idle to be fixed
        // this.sessionIdleService.checkSessionIdle();
    }

    toggleLeftNav = () => {
        this.toggleLeftBar = !this.toggleLeftBar;
    }

    toggleRightNav = () => {
        this.toggleRightBar = !this.toggleRightBar;
    }

}