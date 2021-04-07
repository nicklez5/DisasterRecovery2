import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Machine, Job, Timecard } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {
  jobs: any;
  errorMsg: any;
  public jobModel = new Job();

  constructor(private machService: ApiService, private router: Router ) { }

  ngOnInit(): void {
  }

  onSubmit(machModel: any){
    this.machService.postJob(this.jobModel).subscribe(
      (data) => {this.jobs = data;
        this.machService.getJobs().subscribe(
          (data) => this.jobs = data,
          (error) => this.errorMsg = error
        )},
        (error) => this.errorMsg = error 
    )

  }
}
