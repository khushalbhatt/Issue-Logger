import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HasLogged } from './addissue/haslogged';
import { IssuesService } from './issues.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'About: This application is used to track the status if the issues raised';
  Recently_added:string="";
  selected:boolean=true;
  loggedin:boolean=false;
  islogin:string="";
  isloggedin!:HasLogged[];
  log!:HasLogged;
  public loog:any="";
  navbarCollapsed = true;

  constructor(private _route: ActivatedRoute,private router: Router,private _issuesservice:IssuesService) { 
  }
  OnItemClicked(message:any):void
  {
    console.log(message);
    this.selected=false;
     this.Recently_added=message.descreption+', ';
     this.Recently_added+=message.severity+', ';
     this.Recently_added+=message.status;
  }
  a_name= 'Online Shopping App';
  
   

  ngOnInit(){

    this._issuesservice.hasloggedOut(false).subscribe(()=>{});
    //this._issuesservice.hasloggedout(false);
    this.loog="LogIn";
  }

  login(){
    this.router.navigate(['/users/login']);
  }
  register(){
    console.log("register is working");
    this.router.navigate(['/users/registration']);
  }
}
