import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserguardService } from '../adduserguard.service';


import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';

const userRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'registration', component: RegistrationComponent,canDeactivate:[AdduserguardService]}
  ];

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [ RouterModule ]
})

export class UsersRoutingModule { }
