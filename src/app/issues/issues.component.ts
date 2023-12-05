import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { IssuesService } from '../issues.service';
import { Issue } from './issues';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { HasLogged } from '../addissue/haslogged';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {


  @ Input() A_name!:string;
  subtitle:string='Issue List';
  n:string="";
  Descreption:string="";
  severity:string="";
  Status:string[]=['Open','Closed','In Progress'];
  status:string="";
  objects!:Issue[];
  @ Output() itemclicked :EventEmitter<any>=new EventEmitter();
  public a!:Issue;
  lastViewedIssue!:string;
  isloggedin!:HasLogged[];
  customize:boolean=false;
  ngsev:boolean=true;
  ngsta:boolean=true;
  ngcr:boolean=true;
  ngrd:boolean=true;
  Logged:boolean=false;
  constructor(private issuesservice:IssuesService,private _route: ActivatedRoute,private router: Router) { 
  }
  
  ngOnInit(): void {
    this.getIssues();
    this._route.paramMap.subscribe((params: Params)=>{
      this.lastViewedIssue=params['get']('id');
    });
    // this.issuesservice.IsLoggedin().subscribe({
    //   next: (objects:any)=>this.isloggedin=objects,
    //   error:  err => console.log(err)
    //   }
    //   );
    if(this.issuesservice.islog === true)
    {
      this.Logged=true;
    } 
    else
    {
      this.Logged=false;
    }
  }
  
  getIssues()
  {
    this.issuesservice.getIssues().subscribe({
    next: (objects:any)=>this.objects=objects,
    error:  err => console.log(err)
    }
    );
  }
  addissue(){
      // let a1={
      // descreption:this.Descreption,
      // severity:this.severity,
      // status:this.status
      // };
      // this.a.descreption=this.Descreption;
      // this.a.severity=this.severity;
      // this.a.status=this.status;
      // console.log(a1);
      // this.itemclicked.emit(a1);
      // this.issuesservice.addIssue(a1).subscribe((objects:any)=>this.getIssues());
      this.router.navigate(['addissue']);
  }
  logoff(){
    this.issuesservice.hasloggedout(false);
    this.Logged=false;
  }
  Delete(issueid: string) {
    if(this.issuesservice.islog === true )
    {
      this.issuesservice.deleteIssue(issueid).subscribe(
        (data: any) => this.getIssues()
      );
    }
    else
    {
      alert("Please Log In");
    }
  }
  Edit(obj:Issue) {
    if(this.issuesservice.islog === true )
    {
      this.issuesservice.editIssue(obj).subscribe(()=>{});
    this.router.navigate(['editissue',obj.id,obj.descreption,obj.severity,obj.status,obj.createddate,obj.resolveddate]);
    }
    else
    {
      alert("Please Log In");
    }
  }
  view(obj:Issue) {
    this.router.navigate(['issue',obj.id,obj.descreption,obj.severity,obj.status,obj.createddate,obj.resolveddate]);
  }
  // this._route.queryParamMap.subscribe((queryParams: Params) => {
  //   this.lastViewedIssue = queryParams['get']('viewedid');
  // });
  Chart()
  {
    this.router.navigate(['chart']);
  }
}

