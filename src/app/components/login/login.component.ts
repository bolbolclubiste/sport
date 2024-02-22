import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  myString: string = "ikramiklsmme";
  msgError: string;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
    })


  }
  login() {
    console.log("here the object from login", this.loginForm.value);
    let obj = this.loginForm.value;
    // let users = JSON.parse(localStorage.getItem("users")||"[]");
    // for (let i = 0; i < users.length; i++) {
    //   if (users[i] .email == this.loginForm.value.email && users[i].password == this.loginForm.value.password){

    //     (users[i] .role== "Admin") ? this.router.navigate(["admin"]) : this.router.navigate([""]) ;
    //   }
    // this.userService.login(obj).subscribe((response) => {
    //   alert(response.message);
    //   console.log("here data ",response.data);
    //   if (response.message == "Welcome") {
    //     (response.data.role == "Admin") ? this.router.navigate(["admin"]) : this.router.navigate([""]);

    //   } else {
    //     this.msgError = "Email/password Invalid"
    //   }

    // });
    this.userService.login(obj); 
  }

}



