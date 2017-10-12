import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbCarouselModule,
    NgbAlertModule, NgbTabset, NgbTabsetModule
} from '@ng-bootstrap/ng-bootstrap';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import {StatModule} from "../../shared/components/modules/stat/stat.module";
import { CalltypeComponent } from './components/calltype/calltype.component';
import { InboundComponent } from './components/inbound/inbound.component';
import { CustomerHistoryComponent } from './components/customer-history/customer-history.component';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        NgbTabsetModule.forRoot(),
        DashboardRoutingModule,
        StatModule,
    ],
    declarations: [
        DashboardComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent,
        CalltypeComponent,
        InboundComponent,
        CustomerHistoryComponent
    ]
})
export class DashboardModule { }
