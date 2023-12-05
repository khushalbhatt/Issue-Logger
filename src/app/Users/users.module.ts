import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';
import { UsersRoutingModule } from './users-routing.module';


@NgModule({
  imports: [CommonModule,
    FormsModule,
    HttpClientModule,
    UsersRoutingModule
  ],
  declarations: [LoginComponent, RegistrationComponent]
})
export class UsersModule { }
