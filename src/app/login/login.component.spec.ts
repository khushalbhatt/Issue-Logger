import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IssuesService } from 'src/app/issues.service';
import { UsersService } from 'src/app/users.service';


import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule 
      ],
      providers: [ IssuesService,UsersService],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should render a input for email`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[name="email"]')).toBeTruthy();
  });
  it(`should render a input for password`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[name="password"]')).toBeTruthy();
  });
  it(`should render a button to submit`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button')).toBeTruthy();
  });
});
