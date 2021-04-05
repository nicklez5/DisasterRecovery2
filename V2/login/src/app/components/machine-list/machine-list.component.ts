import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Machine, Job, Timecard } from '../../models';
import { Router } from '@angular/router';
@Component({
  selector: 'app-machine-list',
  templateUrl: './machine-list.component.html',
  styleUrls: ['./machine-list.component.css']
})
export class MachineListComponent implements OnInit {

  public machines: any;
  public errorMsg;
  constructor(private api: ApiService, private router: Router) { }
  public jobModel = new Machine();

  ngOnInit(): void {
    this.api.getMachines().subscribe(
      (data) => this.machines = data,
      (error) => this.errorMsg = error,
      () => console.log('the sequence completed!')
    );
  }

}
