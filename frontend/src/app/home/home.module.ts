import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { homeRoute } from './home.route';

import { HomeComponent } from './home/home.component';


@NgModule({
    imports: [CommonModule, homeRoute],
    declarations: [HomeComponent],
})
export class HomeModule { }
