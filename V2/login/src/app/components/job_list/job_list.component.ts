import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../api.service';
import { Machine, Job, Timecard } from '../../models';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './job_list.component.html',
  styleUrls: ['./job_list.component.css']
})
export class JobListComponent implements OnInit {

  public jobs: any;
  public errorMsg;
  constructor(private api: ApiService, private router: Router) { }
  public jobModel = new Job();
  ngOnInit(): void {
    this.api.getJobs().subscribe(
      (data) => this.jobs = data,
      (error) => this.errorMsg = error,
      () => console.log('the sequence completed!')
    );   
  }

 
}
