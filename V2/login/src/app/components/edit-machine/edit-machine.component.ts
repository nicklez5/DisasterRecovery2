import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
@Component({
  selector: 'app-edit-machine',
  templateUrl: './edit-machine.component.html',
  styleUrls: ['./edit-machine.component.css']
})
export class EditMachineComponent implements OnInit {
  machineId: any;
  machine: any;
  errorMsg: any;
  machines: any;
  constructor(private machService: ApiService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('machine_code');
      console.log(id);
      this.machineId = id;
      console.log("Machine Update ID: " + this.machineId);
  });
    this.machService.getMachineById(this.machineId).subscribe(
      (data) => this.machine = data,
      (error) => this.errorMsg = error,
      () => console.log("Machine Editted Code: " + this.machine.machine_code)

    )
  }

  update(machineId: any, machine: any){
    this.machService.updateMachine(this.machineId, this.machine).subscribe(
      (data) => { this.machine = data;
        this.machService.getMachines().subscribe(
          (data) => this.machines = data,
          (error) => this.errorMsg = error,
          () => console.log("completed")
        )
      },
      (error) => {this.errorMsg = error; console.log(error); }
    );
    this.router.navigate(['/machines']);

  }
}
