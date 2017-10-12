import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TranslateModule } from '@ngx-translate/core';

import {HeaderComponent} from "../shared/components/header/header.component";
import {SidebarComponent} from "../shared/components/sidebar/sidebar.component";
import {LayoutComponent } from './layout.component';
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      NgbDropdownModule.forRoot(),
      TranslateModule.forRoot(),
    ],
      declarations: [
        LayoutComponent,
        HeaderComponent,
        SidebarComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
