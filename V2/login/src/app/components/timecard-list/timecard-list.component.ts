import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Machine, Job, Timecard } from '../../models';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-timecard-list',
  templateUrl: './timecard-list.component.html',
  styleUrls: ['./timecard-list.component.css']
})
export class TimecardListComponent implements OnInit {
  public timecards: any;
  public timecard_code: any;
  public timecard: any;
  public errorMsg;
  constructor(private timecardService: ApiService, private actRoute: ActivatedRoute, private router: Router) { }

  
  ngOnInit(): void {
    this.actRoute.paramMap.subscribe((params:ParamMap) =>{
    let id = params.get('sitecode');
      console.log(id);
      this.timecard = id;
      console.log("Timecard Update ID: " + this.timecard);
    });
    this.timecardService.getTimecards().subscribe(
      (data) => this.timecards = data,
      (error) => this.errorMsg = error,
      () => console.log("Number of timecards: " + this.timecards.length)
    );
  }

  goBack(): void{
    this.router.navigate(['/home']);
  }
  final_me(timecard_code: any, timecard: any){
    timecard.status = "Finalized"
    this.timecardService.updateTimecard(timecard_code,timecard).subscribe(
      (data) => { this.timecard = data;
        this.timecard_code.getTimecards().subscribe(
          (data) => this.timecards = data,
          (error) => this.errorMsg = error,
          () => console.log("completed")
        )
      },
      (error) => {this.errorMsg = error; console.log(error); }
    );
    

  }
  
  ngOnDestroy(): void{
    this.timecardService.updateTimecard(this.timecard_code,this.timecard).subscribe(
      (data) => { this.timecard = data;
        this.timecard_code.getTimecards().subscribe(
          (data) => this.timecards = data,
          (error) => this.errorMsg = error,
          () => console.log("completed")
        )
      },
      (error) => {this.errorMsg = error; console.log(error); }
    );
    this.router.navigate(['/employees']);
  }

}
