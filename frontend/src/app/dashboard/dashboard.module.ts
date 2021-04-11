import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dashboardRoute } from './dashboard.route';
import { HighchartsChartModule } from "highcharts-angular";
import { DragDropModule } from "@angular/cdk/drag-drop";

import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackListComponent } from './feedback/feedback-list.component';

@NgModule({
    imports: [CommonModule, dashboardRoute, HighchartsChartModule, DragDropModule],
    declarations: [FeedbackListComponent, FeedbackComponent]
})
export class DashboardModule { }