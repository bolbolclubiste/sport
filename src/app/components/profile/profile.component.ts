import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  user: any;

  constructor(private userService :UserService) { }

  ngOnInit() {
  

    let connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
    console.log("here connectedUser", connectedUser);
    this.userService.getUserById(connectedUser.id).subscribe((response) => {
    this.user = response.userById;
    })
    }
    editProfile() {
    this.userService.editProfil(this.user).subscribe((response)=>{
      alert(response.message)
    });
    }
  }