import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, FormBuilder, ReactiveFormsModule, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { NotesService } from 'src/app/services/notesservice/notes.service';

@Component({
  selector: 'app-addbooking',
  templateUrl: './addbooking.component.html',
  styleUrls: ['./addbooking.component.scss']
})
export class AddbookingComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  constructor(private note:NotesService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      userId: ['', Validators.required],
      roomId: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      notes: ['', Validators.required],

    });
  }

  onSubmit() {
    this.submitted = true;



    console.log("booking added successfully");
    let data = {
      userId: this.registerForm.value.name,
      roomId: this.registerForm.value.name,
      startDate: this.registerForm.value.startDate,
      endDate: this.registerForm.value.startDate,
    }
    this.note.addbooking(data).subscribe((response: any) => {
      console.log(response)
      this.router.navigateByUrl('/dashboard')


    });



  }

}
