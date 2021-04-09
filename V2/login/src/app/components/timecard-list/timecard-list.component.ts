import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Machine, Job, Timecard } from '../../models';
import { Router } from '@angular/router';
@Component({
  selector: 'app-timecard-list',
  templateUrl: './timecard-list.component.html',
  styleUrls: ['./timecard-list.component.css']
})
export class TimecardListComponent implements OnInit {
  public timecards: any;
  public errorMsg;
  constructor(private timecardService: ApiService, private router: Router) { }

  
  ngOnInit(): void {
    this.timecardService.getTimecards().subscribe(
      (data) => this.timecards = data,
      (error) => this.errorMsg = error,
      () => console.log("Number of timecards: " + this.timecards.length)
    );
  }

  goBack(): void{
    this.router.navigate(['/home']);
  }

}
