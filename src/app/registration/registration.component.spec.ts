import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RegistrationComponent } from './registration.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { IssuesService } from 'src/app/issues.service';
import { UsersService } from 'src/app/users.service';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule 
      ],
      providers: [ IssuesService,UsersService ],
      declarations: [ RegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should render subtitle in a h2 tag`, () => {
    const fixture = TestBed.createComponent(RegistrationComponent);
    fixture.detectChanges();
    const appDe: DebugElement = fixture.debugElement;
    const h2De = appDe.query(By.css('h2'));
    const h2: HTMLElement = h2De.nativeElement; // Will work in browser environment
    expect(h2.textContent).toEqual('Add User');
  });
  it(`should render a input for email`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[name="email"]')).toBeTruthy();
  });
  it(`should render a input for password`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[name="password"]')).toBeTruthy();
  });
  it(`should render a input for firstname`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[name="firstname"]')).toBeTruthy();
  });
  it(`should render a input for lastname`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[name="lastname"]')).toBeTruthy();
  });
  it(`should render a input for number`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[name="number"]')).toBeTruthy();
  });
  it(`should render a input for location`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[name="location"]')).toBeTruthy();
  });
  it(`should render a button to submit`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button')).toBeTruthy();
  });
});
