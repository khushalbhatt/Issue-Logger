import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { IssuesService } from '../issues.service';
import { Issue } from '../issues/issues';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router,private issueservice:IssuesService) { }
  id!:string;
  descreption!:string;
  severity!:string;
  status!:string;
  createddate!:Date;
  resolveddate!:Date;
  objects!:Issue[];
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: Params) => {
      this.id = params['get']('id');
      this.descreption=params['get']('descreption');
      this.severity=params['get']('severity');
      this.status=params['get']('status');
      this.createddate=params['get']('createddate');
      this.resolveddate=params['get']('resolveddate');
      this.issueservice.getIssues().subscribe({
        next: (objects:any)=>this.objects=objects,
        error:  err => console.log(err)
        }
        );
  });
  }
  goBack(): void {
    // Optional Route Parameter Approach 
    for(let i=0;i<this.objects.length;i++)
    {
      if(this.id==this.objects[i].id)
      {
        this.objects[i].count++;
        this.issueservice.incrementcount(this.objects[i]).subscribe();
        break;
      }
    }

     this.router.navigate(['issues', { id: this.id }]);
    
    // Query Parameter Approach    
    //this.router.navigate(['issues'], { queryParams: { viewedid: this.id } });
}
}
