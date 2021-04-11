import { NgModule } from '@angular/core';
import { BrowserModule,Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
//Routes
import { routing } from './app.route';

import { HomeModule } from './home/home.module';
import { NavigationModule } from './navigation/navigation.module';

import { AppComponent } from './app.component';
import { EventsNavbarComponent } from './navigation/header/events-navbar.component';
import { EventsFooterComponent } from './navigation/footer/events-footer.component';

@NgModule({
    imports: [
        HttpClientModule,
        RouterModule,
        BrowserModule,
        NavigationModule,
        routing
    ],
    declarations: [
        AppComponent  
    ],
    providers: [
        Title
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }