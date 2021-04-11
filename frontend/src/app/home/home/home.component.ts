import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as Highcharts from 'highcharts'

@Component({
    selector: 'tem-home',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
    constructor(private _title: Title) { }
    ngOnInit(): void {
        this._title.setTitle("Home");
    }
    firstChart = { chartType: "Area Chart", imgPath: "images/area.png" };
    charts = [
        { chartType: "Bar Chart", imgPath: "images/bar.png" },
        { chartType: "Column Chart", imgPath: "images/column.png" },
        { chartType: "Pie Chart", imgPath: "images/pie.png" }
    ]
}