import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IssuesService } from '../issues.service';

import { IssueComponent } from './issue.component';

describe('IssueComponent', () => {
  let component: IssueComponent;
  let fixture: ComponentFixture<IssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule 
      ],
      providers: [ IssuesService ],
      declarations: [ IssueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should render a label for descreption`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('label[name="descreption"]')).toBeTruthy();
  });
  it(`should render a label for status`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('label[name="status"]')).toBeTruthy();
  });
  it(`should render a label for severity`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('label[name="severity"]')).toBeTruthy();
  });
  it(`should render a button to go back`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button')).toBeTruthy();
  });
  it(`should render subtitle in a h1 tag`, () => {
    const fixture = TestBed.createComponent(IssueComponent);
    fixture.detectChanges();
    const appDe: DebugElement = fixture.debugElement;
    const h1De = appDe.query(By.css('h1'));
    const h1: HTMLElement = h1De.nativeElement; // Will work in browser environment
    expect(h1.textContent).toEqual('Issue Details');
  });
});
