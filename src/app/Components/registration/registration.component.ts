import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private user: UserService) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      fullname: ['', Validators.required], //this firstName name in .ts file and the formcontrolname in .html file should be exactly same
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', [Validators.required, Validators.pattern('[- +()0-9]+')]],
      //service: ['advance', Validators.required],
      confirm: ['', Validators.required],
    })
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.valid) {
      console.log(this.registerForm.value);

      let payload = {    
        fullname: this.registerForm.value.fullname, 
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        mobileNumber:this.registerForm.value.mobile
        //service: this.registerForm.value.service
        // confirm:this.registerForm.value.confirm,

      }
      this.user.userRegister(payload).subscribe((response: any) => {    
        console.log("********Registration Successfull*******",response)
      })
    } else {
      console.log("enter data");
    }
  }

}






