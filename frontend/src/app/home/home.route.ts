import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const homeRouteConfig: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];



export const homeRoute: ModuleWithProviders = RouterModule.forChild(homeRouteConfig);