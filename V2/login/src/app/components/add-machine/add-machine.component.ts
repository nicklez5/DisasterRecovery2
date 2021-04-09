import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Machine, Job, Timecard } from '../../models';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-machine',
  templateUrl: './add-machine.component.html',
  styleUrls: ['./add-machine.component.css']
})
export class AddMachineComponent implements OnInit {
  machines: any;
  errorMsg: any;
  public machModel = new Machine();

  constructor(private machService: ApiService, private router: Router ) { }

  ngOnInit(): void {
   
  }

  onSubmit(machModel: any){
    this.machService.postMachine(this.machModel).subscribe(
      (data) => {this.machines = data;
        this.machService.getMachines().subscribe(
          (data) => this.machines = data,
          (error) => this.errorMsg = error
        )},
        (error) => this.errorMsg = error 
    )
    this.router.navigate(['/machines'])

  }
  
}
