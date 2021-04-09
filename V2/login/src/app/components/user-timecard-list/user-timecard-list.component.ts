import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Machine, Job, Timecard } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-timecard-list',
  templateUrl: './user-timecard-list.component.html',
  styleUrls: ['./user-timecard-list.component.css']
})
export class UserTimecardListComponent implements OnInit {

  public jobs: any;
  public machines: any;
  public timecards: any; 
  public errorMsg;
  constructor(private theService: ApiService, private router: Router ) { }

  ngOnInit(): void {
    this.theService.getTimecards().subscribe(
      (data) => this.timecards = data,
      (error) => this.errorMsg = error,
      () => console.log('the sequence completed!')
    );
  }

  goAdd(): void{
    this.router.navigate(['usertimecards/add']);
  }

}
