import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ],
      declarations: [ AboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it(`should render subtitle in a h1 tag`, () => {
    const fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    const appDe: DebugElement = fixture.debugElement;
    const h1De = appDe.query(By.css('h1'));
    const h1: HTMLElement = h1De.nativeElement; // Will work in browser environment
    expect(h1.textContent).toEqual('About: This application is used to track the status of the issues raised');
  });
});
