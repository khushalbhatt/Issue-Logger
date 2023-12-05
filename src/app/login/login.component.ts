import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IssuesService } from 'src/app/issues.service';
import { UsersService } from 'src/app/users.service';

import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Logged!: boolean;

  constructor(private issuesservice:IssuesService,private router: Router,private userservice:UsersService) { }

  email:string="";
  password:string="";
  @ViewChild(NgForm, {static: false}) AddUser!: NgForm;
  Users!:Login[];
  ngOnInit(): void {
    this.getUsers();
    console.log(this.Users);
    if(this.issuesservice.islog === true)
    {
      this.Logged=true;
    } 
    else
    {
      this.Logged=false;
    }
  }
  getUsers()
  {
    this.userservice.getUsers().subscribe({
      next: (objects:any)=>this.Users=objects,
      error:  err => console.log(err)
      }
      );
  }
  logoff(){
    this.issuesservice.hasloggedout(false);
    this.Logged=false;
  }
  onSubmit(formValue: any){
    console.log(formValue);
    for(let i=0;i<this.Users.length;i++)
    {
      console.log(this.Users[i].email+" "+this.Users[i].password);
      if(this.Users[i].email===formValue.email && this.Users[i].password===formValue.password)
      {
        this.issuesservice.hasloggedIn(true).subscribe(()=>{});
        this.issuesservice.hasloggedin(true);
        //this.router.navigate(['app']);
        this.router.navigate(['issues']);
        break;
      }
      else if(i===this.Users.length-1)
      {
        alert('Incorrect Email or Password');
        break;
      }
    }
    //this.issuesservice.addIssue(issue).subscribe();
}
}
