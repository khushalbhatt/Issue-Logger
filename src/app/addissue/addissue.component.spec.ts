import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IssuesService } from '../issues.service';

import { AddissueComponent } from './addissue.component';

describe('AddissueComponent', () => {
  let component: AddissueComponent;
  let fixture: ComponentFixture<AddissueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule 
      ],
      providers: [ IssuesService],
      declarations: [ AddissueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it(`should render Issue Descreption as label`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('label').textContent).toEqual('Descreption: ');
  });

  it(`should render Issue Severity as label with name severity`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('label[name="severity"]').textContent).toEqual('Severity: ');
  });

  it(`should render Issue Status as label with name status`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('label[name="status"]').textContent).toEqual('Status: ');
  });
  it(`should render created date as label with name Created date`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('label[name="createddate"]').textContent).toEqual('Created date: ');
  });

  it(`should render resolved date as label with name Resolved Date:`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('label[name="resolveddate"]').textContent).toEqual('Resolved Date: ');
  });

  it(`should render a text box to accept Issue Descreption`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="text"][name="descreption"]')).toBeTruthy();
  });
  it(`should render a radio type to accept Issue Status`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="radio"]')).toBeTruthy();
  });
  it(`should render a select type to accept Issue Severity`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('select')).toBeTruthy();
  });

  it(`should render a Submit button`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button').textContent).toEqual('Submit');
  });
});
