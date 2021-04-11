import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedbackListComponent } from "./feedback/feedback-list.component";
import { FeedbackComponent } from './feedback/feedback.component';

const dashboardRouteConfig: Routes = [
    {
        path: 'feedback',
        component: FeedbackListComponent
    },
    {
        path: 'feedback/:technology',
        component: FeedbackComponent
    }
];



export const dashboardRoute: ModuleWithProviders = RouterModule.forChild(dashboardRouteConfig);