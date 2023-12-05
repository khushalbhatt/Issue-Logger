import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title:string="This application is used to track the status of the issues raised";
  constructor() { }

  ngOnInit(): void {
  }

}
