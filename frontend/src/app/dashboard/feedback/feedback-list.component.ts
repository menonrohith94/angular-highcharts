import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Feedback } from "../models/feedback";
import { FeedbackService } from '../services/feedback.service';

@Component({
    selector: 'feedback-list',
    templateUrl: './feedback-list.component.html'
})
export class FeedbackListComponent implements OnInit {
    constructor(private _title: Title, 
        private _feedbackService: FeedbackService) { }
    pageTitle:string="Training Feedback List";
    trainingList: string[] = [];
    ngOnInit() {
        this._title.setTitle("Feedback Technologies");
        this._feedbackService.getAllTechnologies().subscribe(
            data => this.trainingList = data,
            err => console.log(err),
            () => console.log("Service call completed!")
        );
    }
}