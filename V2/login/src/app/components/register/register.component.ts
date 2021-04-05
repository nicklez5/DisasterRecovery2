import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  User: any = ['Admin','Contractor'];
  constructor() { }

  ngOnInit(): void {
  }
  onClickSubmit(data){
    alert("Entered Username: " + data.Username + "\nEntered name: " + data.Name + "\nEntered Designation: " + data.DesignationID); 
  }
}
