import { Component, OnInit, VERSION } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  createForm: FormGroup;
  ngOnInit() {
    this.createForm = new FormGroup({
      personDetails: new FormGroup({
        firstName: new FormControl(null, Validators.required),
        lastName: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      gender: new FormControl('male'),
      country: new FormControl('Nepal'),
      hobbies: new FormControl(null),
      skills: new FormArray([new FormControl(null, Validators.required)]),
    });
  }
  onSubmit() {
    console.log(this.createForm);
  }
  addSkills() {
    (<FormArray>this.createForm.get('skills')).push(
      new FormControl(null, Validators.required)
    );
  }
}
