import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

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
      this.user.userSignin(signinobject).subscribe((response: any) => {
        console.log("*****Login Successfull*****",response);
        localStorage.setItem('token', response.response.token);
        this.route.navigateByUrl('/dashboard')

      
      })

    } else {
      console.log("enter data");
    }
  }

}


