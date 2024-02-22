// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { generateId } from 'src/share/genericFunctions';


// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent implements OnInit {
//   signupForm:FormGroup;
//   path: string;
//   constructor (private formBuilder:FormBuilder, private router:Router) { }

//   ngOnInit() {
//     this.path =this.router.url;
//     this.signupForm = this.formBuilder.group({
//       firstName:["",[Validators.required, Validators.minLength(3)]],
//       lastName:["" ,[Validators.required, Validators.minLength(3)]],
//       email:["",[Validators.required, Validators.email]],
//       password:["",[Validators.required, Validators.minLength(6),Validators.maxLength(12)]],
      
//     });
//   }
// signup(){
//   // console.log(this.signupForm.value);
//   // if (this.path=="/subscription") {
//   //   this.signupForm.value.role ="user";
//   // } else {
//   //   this.signupForm.value.role="Admin";
    
//   // }
//   this.signupForm.value.role= (this.path=="/subscription") ? "user" : "Admin";
//    let usersTab = JSON.parse(localStorage.getItem("users")||"[]")
//    this.signupForm.value.id=generateId(usersTab);
//    usersTab.push(this.signupForm.value);
//    localStorage.setItem("users", JSON.stringify(usersTab));
//    this.router.navigate(["signin"]);

  
// }
// }






import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupForm:FormGroup;
path:string;
msgEror:string;
image:string;
  constructor(private formBuilder:FormBuilder , private router:Router, private userService:UserService) { }

  ngOnInit() {
    this.path=this.router.url;
    this.signupForm=this.formBuilder.group({
      firstName:["",[Validators.required,Validators.minLength(3)]],
      lastName:["",[Validators.required,Validators.minLength(3)]],
      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required,Validators.minLength(6),Validators.maxLength(12)]],
      img:[""],
    })
  }
  signup(){
    console.log(this.signupForm.value);
    console.log(this.signupForm.value.img);

    // if (this.path=="/Subscription") {
    //   this.signupForm.value.role="user";
    // } else {
    //   this.signupForm.value.role="Admin";
    // }
    // (this.path=="/Subscription")? this.signupForm.value.role="user":this.signupForm.value.role="Admin";
    this.signupForm.value.role = (this.path == "/subscription")? "user" : "Admin";
    this.userService.signup(this.signupForm.value, this.signupForm.value.img).subscribe((response)=>{
    if (response.message=="Error") {
      this.msgEror = "Email Exist";
    } else{
      this.router.navigate(["signin"]);



    }

    });



    
    //  let usersTab=JSON.parse(localStorage.getItem("users")|| "[]");
    //  this.signupForm.value.id=generateId(usersTab);
    //  usersTab.push(this.signupForm.value);
    //  localStorage.setItem("users", JSON.stringify(usersTab));
    //  this.router.navigate(["signin"]);
  }

  onImageSelected(event: Event){
    const file = (event.target as HTMLInputElement).files[0];
    console.log(file);
    // patch value te5ouli 7aja fer4a winsobou fiha  
    this.signupForm.patchValue({img:file});
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () =>{
      this.image=reader.result as string;

    }
    reader.readAsDataURL(file);
    

  }
}

