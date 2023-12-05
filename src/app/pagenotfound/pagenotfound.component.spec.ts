import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { PagenotfoundComponent } from './pagenotfound.component';

describe('PagenotfoundComponent', () => {
  let component: PagenotfoundComponent;
  let fixture: ComponentFixture<PagenotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ Router ],
      declarations: [ PagenotfoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagenotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should render subtitle in a h1 tag`, () => {
    const fixture = TestBed.createComponent(PagenotfoundComponent);
    fixture.detectChanges();
    const appDe: DebugElement = fixture.debugElement;
    const h1De = appDe.query(By.css('h1'));
    const h1: HTMLElement = h1De.nativeElement; // Will work in browser environment
    expect(h1.textContent).toEqual('Page Not Found');
  });
});
