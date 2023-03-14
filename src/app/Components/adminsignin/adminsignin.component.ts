import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-adminsignin',
  templateUrl: './adminsignin.component.html',
  styleUrls: ['./adminsignin.component.scss']
})
export class AdminSigninComponent implements OnInit {

  signinForm!: FormGroup;
  submitted = false;
  token:any

  constructor(private formBuilder: FormBuilder, private user: UserService, private route: Router) { }

  ngOnInit(): void {

    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }
  

  onSubmit() {
    this.submitted = true;
    if (this.signinForm.valid) {
      console.log(this.signinForm.value);

      let signinobject = {
        email: this.signinForm.value.email,
        password: this.signinForm.value.password
      }
      this.user.adminSignin(signinobject).subscribe((response: any) => {
        console.log("*****Admin Login Successfull*****",response);
        localStorage.setItem('token', response.data);
        

      
      })

    } else {
      console.log("enter data");
    }
  }

}


