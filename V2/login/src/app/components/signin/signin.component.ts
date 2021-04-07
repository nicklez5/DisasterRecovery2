import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  admin_username: string;
  admin_pw : string;
  user_username: string;
  user_pw: string;
  constructor(private router: Router ) {
    
    this.admin_username = "admin";
    this.admin_pw = "admin";
    this.user_username = "user";
    this.user_pw = "user";
  }

  ngOnInit(): void {
  }
  onClickSubmit(data){
    if((data.Username == this.admin_username) && (data.Password == this.admin_pw)){
      alert("Admin success");
      this.router.navigate(['/home/'])
    }else if((data.Username == this.user_username) && (data.Password == this.user_pw)){
      alert("User success");
    }else{
      alert("Failed");
    }
  }
}
