import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Machine, Job, Timecard } from '../../models';
import { Router } from '@angular/router';
function calculate_me(){
  var hours_worked = (<HTMLInputElement>document.getElementById("HrsWorked")).value;
  var job_obj = (<HTMLInputElement>document.getElementById("id_of_select_job")).value;
  
  var result;
  result = parseFloat(hours_worked) * parseFloat(job_obj);
  document.getElementById("total").innerHTML = result;
}
function calculate_me2(){
  var hours_worked = (<HTMLInputElement>document.getElementById("HrsWorked2")).value;
  var job_obj = (<HTMLInputElement>document.getElementById("id_of_machine_job")).value;
  
  var result;
  result = parseFloat(hours_worked) * parseFloat(job_obj);
  document.getElementById("total2").innerHTML = result;
}
function calculate_total(){
  var total1 = (<HTMLInputElement>document.getElementById("total")).value;
  var total2 = (<HTMLInputElement>document.getElementById("total2")).value;
  var result;
  result = parseFloat(total1) + parseFloat(total2);
  document.getElementById("total3").innerHTML = result;
}
function calculate_hours(){
  var hours_worked1 = (<HTMLInputElement>document.getElementById("HrsWorked")).value;
  var hours_worked2 = (<HTMLInputElement>document.getElementById("HrsWorked2")).value;
  var result_hours;
  result_hours = parseFloat(hours_worked1) + parseFloat(hours_worked2);
  document.getElementById("total4").innerHTML = result_hours;
}
@Component({
  selector: 'app-user-add-timecard-list',
  templateUrl: './user-add-timecard-list.component.html',
  styleUrls: ['./user-add-timecard-list.component.css']
})
export class UserAddTimecardListComponent implements OnInit {
  machines: any;
  machine: any;
  jobs: any;
  job: any;
  timecards: any;
  errorMsg: any;
  HrsWorked: number;
  HrsWorked2: number;
  public jobModel = new Job();
  public timecardModel = new Timecard();
  public machinecardModel = new Machine();
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.getTimecards().subscribe(
      (data) => this.timecards = data,
      (error) => this.errorMsg = error,
      () => console.log('the timecard sequence completed!')
    );

    this.apiService.getMachines().subscribe(
      (data) => this.machines = data,
      (error) => this.errorMsg = error,
      () => console.log('the machine sequence completed!')
    );

    this.apiService.getJobs().subscribe(
      (data) => this.jobs = data,
      (error) => this.errorMsg = error,
      () => console.log('the job sequence completed!')
    );
    calculate_me();
    calculate_me2();
    calculate_total();
    calculate_hours();
  }

  onSubmit(timeModel: any){
    this.apiService.postTimecard(this.timecardModel).subscribe(
      (data) => { this.timecards = data;
        this.apiService.getTimecards().subscribe(
          (data) => this.timecards = data,
          (error) => this.errorMsg = error
        )},
        (error) => this.errorMsg = error 
    )
  }

}
