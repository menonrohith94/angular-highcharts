import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const defaultRoute: Routes = [
    {
        path: '',
        loadChildren: './home/home.module#HomeModule'
    }
];
const homeRoute: Routes = [
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    }
];
const dashboardRoute: Routes = [
    {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    }
];
const appRoutes: Routes = [
    ...homeRoute,
    ...dashboardRoute,
    ...defaultRoute
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);