import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsNavbarComponent } from './header/events-navbar.component';
import { EventsFooterComponent } from './footer/events-footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [EventsNavbarComponent, EventsFooterComponent],
    declarations: [EventsNavbarComponent, EventsFooterComponent]
})
export class NavigationModule {

}
