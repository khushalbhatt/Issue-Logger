import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IssuesService } from '../issues.service';
import { Issue } from '../issues/issues';
import { ChartConfiguration,ChartData,ChartEvent,ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { first } from 'rxjs';
//import DataLabelPlugins from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

 @ViewChild (BaseChartDirective) chart:BaseChartDirective|undefined;

  constructor(private issuesservice:IssuesService,private route:Router,private _route:ActivatedRoute) { }
  data:any[]=[];
  objects!:Issue[];
  Labels:string[]=[];
  public Type:ChartType='bar';
  public Data:ChartData<'bar'>={
    labels:[],
    datasets: [{
      data:[]
    }]
  }
  options:ChartConfiguration['options']={
    responsive:true,
    scales:{
      x:{},
      y:{
        min:0
      }
    }
  }
 ngOnInit() {
     this.getIssues();
    this.implement();
  }
 
  getIssues()
  {
    this.issuesservice.getIssues().subscribe({
    next: (objects:any)=>this.objects=objects,
    error:  err => console.log(err)
    }
    );
    this.data=[];
    this.Labels=[];
    this.issuesservice.getIssues().subscribe({
      next: (objects:any)=>{
        for(let i=0;i<objects.length;i++){
          console.log(objects[i].count);
          this.data.push(objects[i].count);
           this.Labels.push('Issue'+(i+1));
      }
      this.Data.datasets[0].data=this.data;
    this.Data.datasets[0].label="Issues";
    this.Data.labels=this.Labels;
    this.chart?.update;
    },
      error:  err => console.log(err)
      }
      );
      console.log("data is "+this.data);
      console.log("Labels are "+this.Labels);
      this.Data.datasets[0].data=this.data;
    this.Data.datasets[0].label="Issues";
    this.Data.labels=this.Labels;
    console.log("dataset is "+this.Data.datasets[0].data+"end");
    this.chart?.update;
  }
     
     
     
  implement(){
    // this.data=[];
         this.Labels=[];
         for(let i=0;i<this.data.length;i++)
         {
          this.Labels.push('Issue'+(i+1));
         }
    // for(let i=0;i<this.objects.length;i++)
    // {
    //     this.data.push(this.objects[i].count);
    //     this.Labels.push('Issue'+(i+1));
    //     //console.log(i);
    //    // console.log(this.objects[i].count);
    // }
    this.Data.datasets[0].data=this.data;
    this.Data.datasets[0].label="Issues";
    this.Data.labels=this.Labels;
    this.chart?.update;
  }
}
