import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { IssuesService } from './issues.service';
import { IssuesComponent } from './issues/issues.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { IssueComponent } from './issue/issue.component';
import { AppRoutingModule } from 'src/app-routing.module';
import { AddissueComponent } from './addissue/addissue.component';
import { UsersService } from './users.service';
import { IssuePipe } from './issues/issues.pipe';
import { NgChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    IssuesComponent,
    AboutComponent,
    PagenotfoundComponent,
    IssueComponent,
    AddissueComponent,
    IssuePipe,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    NgChartsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [IssuesService,UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
