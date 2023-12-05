import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IssuesService } from '../issues.service';
import { Issue } from '../issues/issues';
import { HasLogged } from './haslogged';

@Component({
  selector: 'app-addissue',
  templateUrl: './addissue.component.html',
  styleUrls: ['./addissue.component.css']
})
export class AddissueComponent implements OnInit {

  constructor(private issuesservice:IssuesService,private router: Router,private _route:ActivatedRoute) { }
  id:any="";
  descreption:any="";
  isloggedin!:HasLogged[];
  Severity:string[]=['Critical','Minor','Major'];
  severity:string="";
  status:string="";
  Status:string[]=["Open","Closed","In Progress"];
  createddate!:Date;
  resolveddate!:Date;
  issues!:Issue[];
  Logged:boolean=false;
  @ViewChild(NgForm, {static: false}) Addissue!: NgForm;
  ngOnInit(): void {
    this.severity=this.Severity[0];
    // this.issuesservice.IsLoggedin().subscribe({
    //   next: (objects:any)=>this.isloggedin=objects,
    //   error:  err => console.log(err)
    //   }
    //   );
    //   console.log(this.isloggedin);

     this._route.paramMap.subscribe(param=>{
       let id=param.get('id');
       if(id!==null)
       {
         console.log('edit working');
         this.id=id;
         let d=param.get('descreption');
         let S=param.get('severity');
         let s=param.get('status');
         let c=param.get('createddate');
         let r=param.get('resolveddate');

         this.setissuedetail(id,d,S,s,c,r);
       }
     });
     if(this.issuesservice.islog === true)
    {
      this.Logged=true;
    } 
    else
    {
      this.Logged=false;
    }
  }
  logoff(){
    this.issuesservice.hasloggedout(false);
    this.Logged=false;
  }
  setissuedetail(id:any,d:any,S:any,s:any,c:any,r:any)
  {
         this.descreption=d;
         this.severity=S;
         this.status=s;
         this.createddate=c;
         this.resolveddate=r;
  }
  
  onSubmit(formValue: any){
    console.log(formValue);
    console.log("id is "+this.id);
    if(this.id!==""){
      console.log("formvalue not null");
      let issue:Issue={
        descreption: formValue.descreption,
        severity: formValue.severity,
        status: formValue.status,
        id: this.id,
        createddate:formValue.createddate,
        resolveddate:formValue.resolveddate,
        count:1
      };
      this.issuesservice.editIssue(issue).subscribe();
      this.router.navigate(['issues']);
    }
    else
    {
    let issue:Issue={
      descreption: formValue.descreption,
      severity: formValue.severity,
      status: formValue.status,
      id: '',
      createddate:formValue.createddate,
      resolveddate:formValue.resolveddate,
      count:0
    };
    console.log(this.isloggedin);
    //  if(this.isloggedin[0].islogged ==="true")
    if(this.issuesservice.islog === true )
     {
       this.issuesservice.addIssue(issue).subscribe();
       this.router.navigate(['issues']);
     }
     else
     {
       alert("Please Log In");
     }
    }
    //this.issuesservice.addIssue(issue).subscribe();
     //this.router.navigate(['issues']);
}
}
