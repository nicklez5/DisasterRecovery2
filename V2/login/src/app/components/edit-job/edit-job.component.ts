import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Job } from '../../models';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { fromEventPattern } from 'rxjs';
@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {
  jobId: any;
  job: any;
  errorMsg: any;
  jobs: any;
  constructor(private jobService: ApiService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('code');
      console.log(id);
      this.jobId = id;
      console.log("Job Update ID: " + this.jobId);
  });
    this.job = this.jobService.getJobById(this.jobId).subscribe(
      (data) => {this.job = data; console.log(data); }, 
      (error) => { this.errorMsg = error; console.log(error); }
      
    );
  }

  update(jobId: any, job:any){
    this.jobService.updateJob(this.jobId,this.job).subscribe(
      
      (data) => { this.job = data;
        this.jobService.getJobs().subscribe(
          (data) => this.jobs = data,
          (error) => this.errorMsg = error,
          () => console.log("completed")
        )
      },
      (error) => {this.errorMsg = error; console.log(error); }
    );
    this.router.navigate(['/jobs']);
  }

}
