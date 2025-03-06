import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true, // Enable standalone component
  imports: [ReactiveFormsModule], // Import ReactiveFormsModule
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  reactiveForm: FormGroup;

  constructor() {
    this.reactiveForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  onSubmit() {
    if (this.reactiveForm.valid) {
      console.log('Form Submitted:', this.reactiveForm.value);
      alert('Form Submitted Successfully!');
      this.reactiveForm.reset(); // Reset form after submission
    }
  }
}
