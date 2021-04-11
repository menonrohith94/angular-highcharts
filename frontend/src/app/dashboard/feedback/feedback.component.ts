import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import * as Highcharts from 'highcharts';

//reorder drag drop
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import chartOptionsDefaultObj from "../chart-options-global-object";

import { FeedbackService } from "../services/feedback.service";
import { Feedback } from '../models/feedback';


@Component({
    selector: 'feedback',
    templateUrl: './feedback.component.html'
})

export class FeedbackComponent implements OnInit {
    constructor(private _route: ActivatedRoute, private _feedbackService: FeedbackService, private _title: Title) {

    }

    charts = ["area", "bar", "column", "line", "pie", "scatter", "spline"];
    feedbacks: Feedback[] = [];
    pageTitle: string = `Welcome To Feedback Dashboard!`;
    technology: string = "";

    chartData: number[] = [];
    Highcharts = Highcharts;
    chartOptions = chartOptionsDefaultObj;
    chartType = "bar";
    ngOnInit() {
        this.technology = <string>this._route.snapshot.paramMap.get('technology');
        this._title.setTitle("Home");
        this._feedbackService.getAverageFeedbacks(this.technology).subscribe(
            data => {
                this.calculateAverage(data.map(res => res.data.Infrastructure));
                this.calculateAverage(data.map(res => res.data.Material));
                this.calculateAverage(data.map(res => res.data.Trainer_Knowledge));
                this.calculateAverage(data.map(res => res.data.Hardware_Software));
                this.calculateAverage(data.map(res => res.data.Food));
                this.renderChart();
            },
            err => console.log(err),
            () => console.log("Feedback Service Completed!")
        );
    }

    private calculateAverage(series: number[]): void {
        let avg = 0;
        for (let feedback of series) {
            avg = avg + feedback;
        }
        this.chartData.push(avg / series.length);
    }
    private renderChart(): void {
        let trainingName: string = this.technology;

        this.chartOptions = {
            ...this.chartOptions,
            chart: {
                renderTo: 'container',
                type: this.chartType
            },
            title: {
                text: trainingName + ' Feedback'
            },
            series: [{
                name: this.technology,
                data: <never>this.chartData
            }]
        };
    }
    drop(event: CdkDragDrop<string[]>) {
        this.chartType = event.container.data[event.previousIndex];
        this.renderChart();
        console.log(this.chartType);
    }
    sortingDragList(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.charts, event.previousIndex, event.currentIndex);
        console.log(this.charts);
    }
}