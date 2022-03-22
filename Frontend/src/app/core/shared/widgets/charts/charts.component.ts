import { Component, Input, OnInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss']
})

export class ChartsComponent implements OnInit {

    @Input() chartData: any;

    chartId: any;
    chart: any;

    constructor() { }

    ngOnInit() {
        this.chartId = document.getElementById('chart');
        this.donutChart();
        setTimeout(() => {
            new ResizeObserver(this.chartResize).observe(this.chartId)
        }, 1000);
    }

    chartResize = () => {
        if (this.chart)
            this.chart.resize()
    }

    donutChart() {
        let formattedData: any = [];
        this.chartData.forEach((item: any) => {
            formattedData.push([item.key, item.value]);
        });

        this.chart = c3.generate({
            data: {
                columns: formattedData,
                type: 'donut',
            },
            donut: {
                title: "Sales Data"
            }
        });
    }

}