import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './app/about/about.component';
import { AddissueComponent } from './app/addissue/addissue.component';
import { AddissueguardService } from './app/addissueguard.service';
import { AdduserguardService } from './app/adduserguard.service';
import { ChartComponent } from './app/chart/chart.component';
import { IssueComponent } from './app/issue/issue.component';
import { IssueguardService } from './app/issueguard.service';
import { IssuesComponent } from './app/issues/issues.component';
import { LoginComponent } from './app/login/login.component';
import { PagenotfoundComponent } from './app/pagenotfound/pagenotfound.component';
import { RegistrationComponent } from './app/registration/registration.component';
import { AppComponent} from './app/app.component';

const appRoutes: Routes = [
    { path: '', component: AboutComponent },
    { path: 'issues', component: IssuesComponent },
    { path: 'about', component: AboutComponent},
   // { path: 'app', component: AppComponent},
    { path: 'chart', component: ChartComponent},
    { path: 'users', loadChildren: () => import('./app/Users/users.module').then(m => m.UsersModule) },
    { path: 'issue/:id/:descreption/:severity/:status/:createddate/:resolveddate', component: IssueComponent,canActivate:[IssueguardService]},
    { path: 'addissue', component: AddissueComponent,canDeactivate:[AddissueguardService]},
    { path: 'editissue/:id/:descreption/:severity/:status/:createddate/:resolveddate', component: AddissueComponent,canDeactivate:[AddissueguardService]},
    { path: '**', component: PagenotfoundComponent }
  ];
  

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [ RouterModule ]
  })
  
  export class AppRoutingModule { }
  