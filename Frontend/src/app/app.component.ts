import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    title: string;

    constructor(
        private router: Router,
        private titleService: Title
    ) { }

    ngOnInit() {
        this.setTitle();
    }

    setTitle = () => {
        this.router.events
            .pipe(
                filter((event: any) => event instanceof NavigationEnd),
                map(() => {
                    let route: ActivatedRoute = this.router.routerState.root;
                    let routeTitle = '';
                    while (route!.firstChild) {
                        route = route.firstChild;
                    }
                    if (route.snapshot.data['title']) {
                        routeTitle = route!.snapshot.data['title'];
                    }
                    return routeTitle;
                })
            )
            .subscribe((title: string) => {
                if (title) {
                    this.titleService.setTitle(`MyApp - ${title}`);
                }
            });
    }

}