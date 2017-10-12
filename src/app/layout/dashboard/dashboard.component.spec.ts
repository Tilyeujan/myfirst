import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import {TranslateModule} from "@ngx-translate/core";
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { DashboardComponent } from './dashboard.component';
import {StatModule} from "../../shared/components/modules/stat/stat.module";

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                NgbCarouselModule.forRoot(),
                NgbAlertModule.forRoot(),
                TranslateModule.forRoot(),
                StatModule,
            ],
            declarations: [
                DashboardComponent,
                TimelineComponent,
                NotificationComponent,
                ChatComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
