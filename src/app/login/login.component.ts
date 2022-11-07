import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { //3rd execute

  //properties
  aim="Your perfect banking partner";

  accounts="Enter your acno here";

  acno=""
  pswd=""
  //user defined functions //4th execute
  acnoChange(event:any){
    this.acno=event.target.value;
    console.log(this.acno);
  }
  pswdChange(event:any){
    this.pswd=event.target.value;
    console.log(this.pswd);
  }

  login(){
    // alert('login clicked')
    var acno=this.acno;
    var pswd=this.pswd;
    var userDetails=this.userDetails;

    if(acno in userDetails){
      if(pswd==userDetails[acno]['password']){
        alert("login successfull");
      }
      else{
        alert("invalid password");
      }
    }else{
      alert("invalid user details")
    }
  }

  userDetails:any={//objects of objects
    1000:{acno:1000,username:'Jees',password:1000,balance:1000},
    1001:{acno:1001,username:'Amal',password:1001,balance:1000},
    1002:{acno:1002,username:'Sarath',password:1002,balance:1000},   
  }

  constructor() { }

  ngOnInit(): void {
  }

}
