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
  constructor(private jobService: ApiService, private router: Router) { }

  goAdd(): void{
    this.router.navigate(['/jobs/add']);
  }
  onEdit(x : Job): void{
    this.router.navigate(['/jobs/',x.id,'update']);
  }
  onDelete(x : Job): void{
    this.jobService.deleteJob(x.id).subscribe(() => {
      this.jobService.getJobs().subscribe(
        (data) => this.jobs = data,
        (error) => this.errorMsg = error
      )
    });
  }

  ngOnInit(): void {
    this.jobService.getJobs().subscribe(
      (data) => this.jobs = data,
      (error) => this.errorMsg = error,
      () => console.log('the sequence completed!')
    );   
  }


 
}
