import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from "./parent/parent.component";
import { ChildComponent } from './child/child.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, ParentComponent,ChildComponent,CommonModule,ReactiveFormsModule,ModalComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent 
{
  //1
  title1 = 'Angular Simple Component';
  description = 'This is a simple Angular application to demonstrate components and data binding.';

//2
  title2 = 'Angular Event Binding';
  handleClick() 
  {
    alert('Button clicked!');
  }

  //3
  name: string = '';

  //4
  isDisabled: boolean = true;
  buttonText: string = 'Submit';

//5
 items: string[] = ['Apple', 'Banana', 'Cherry'];
 isLoggedIn: boolean = true;

//6
 registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      alert('Form submitted successfully! 🎉');
    } else {
      alert('Form is invalid. Please correct the errors.');
    }
  }


//7. Use Case 9: Pagination with ngFor
  isVisible = true; 
  isSpecial = true; 

  toggleVisibility() {
    this.isVisible = !this.isVisible; 
  }

  toggleSpecial() {
    this.isSpecial = !this.isSpecial;
  }



//8-
currentPage = 1;
itemsPerPage = 5;

data = [
  'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5',
  'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10',
  'Item 11', 'Item 12', 'Item 13', 'Item 14', 'Item 15'
];

get paginatedData() {
  const start = (this.currentPage - 1) * this.itemsPerPage;
  return this.data.slice(start, start + this.itemsPerPage);
}

get totalPages() {
  return Math.ceil(this.data.length / this.itemsPerPage);
}

nextPage() {
  if (this.currentPage < this.totalPages) {
    this.currentPage++;
  }
}

prevPage() {
  if (this.currentPage > 1) {
    this.currentPage--;
  }
}



//9-
showModal = false; 

openModal() {
  console.log('🔹 Open Modal Clicked'); // ✅ Debugging Log
  this.showModal = true;
  console.log('showModal:', this.showModal); // ✅ Check if showModal is updating
}

closeModal() {
  console.log('🔸 Close Modal Clicked'); // ✅ Debugging Log
  this.showModal = false;
  console.log('showModal:', this.showModal); // ✅ Check if showModal is updating
}
    
}
