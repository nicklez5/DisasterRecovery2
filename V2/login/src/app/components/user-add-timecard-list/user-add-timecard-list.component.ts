import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Machine, Job, Timecard } from '../../models';
import { Router } from '@angular/router';
function printdate(){
  return "hello";
  
}


function get_value(xyz:number){
  var da_value = (<HTMLInputElement>document.getElementById("id_of_select_job")).value;
  xyz = parseFloat(da_value);
}
function calculate_me(){
  var hours_worked = (<HTMLInputElement>document.getElementById("HrsWorked")).value;
  var job_obj = (<HTMLInputElement>document.getElementById("id_of_select_job")).value;
  console.log("Hours Worked" + hours_worked);
  console.log("Selected Job Hourly Rate" + job_obj);
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
  status: any;
  Total: number;
  Total2: number;
  id_of_select_job: number;
  public jobModel = new Job();
  public timecardModel = new Timecard();
  public machinecardModel = new Machine();
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    status = "open";
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
  
    
  }
  
  
  

  onSubmit(timeModel: any){
    this.timecardModel.total_hours = this.HrsWorked + this.HrsWorked;
    this.timecardModel.total_amount = this.Total + this.Total2;
    this.timecardModel.status = this.status;
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
