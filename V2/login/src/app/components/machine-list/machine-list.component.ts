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
  constructor(private machService: ApiService, private router: Router) { }
  public machModel = new Machine();

  ngOnInit(): void {
    this.machService.getMachines().subscribe(
      (data) => this.machines = data,
      (error) => this.errorMsg = error,
      () => console.log('the sequence completed!')
    );
  }
  goAdd(): void{
    this.router.navigate(['/machines/add']);
  }
  onEdit(x : Machine): void{
    this.router.navigate(['/machines/',x.id,'update']);
  }
  onDelete(x : Machine): void{
    this.machService.deleteMachine(x.id).subscribe(() => {
      this.machService.getMachines().subscribe(
        (data) => this.machines = data,
        (error) => this.errorMsg = error
      )

    });
  }

}
