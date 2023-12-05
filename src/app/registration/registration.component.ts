import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IssuesService } from 'src/app/issues.service';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private issuesservice:IssuesService,private router: Router,private userservice:UsersService) { }

  email:string="";
  firstname:string="";
  lastname:string="";
  password:string="";
  location:string="";
  number:string="";
  @ViewChild(NgForm, {static: false}) AddUser!: NgForm;
  ngOnInit(): void {

  }
  onSubmit(formValue: any){
    console.log(formValue);
    let user:any={
      email:formValue.email,
      password:formValue.password
    };
   // this.issuesservice.addIssue(issue).subscribe();

    this.userservice.addUser(user).subscribe();

    this.router.navigate(['login']);
}
}
