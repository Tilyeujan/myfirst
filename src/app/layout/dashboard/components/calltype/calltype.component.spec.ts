import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalltypeComponent } from './calltype.component';
import {TranslateModule} from "@ngx-translate/core";

describe('CalltypeComponent', () => {
    let component: CalltypeComponent;
    let fixture: ComponentFixture<CalltypeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                TranslateModule.forRoot(),
            ],
            declarations: [ CalltypeComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CalltypeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
