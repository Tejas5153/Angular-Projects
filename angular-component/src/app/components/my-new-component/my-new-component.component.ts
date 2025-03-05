import { Component } from '@angular/core';

@Component({
  selector: 'app-my-new-component',       // The component's selector, used in the HTML
  templateUrl: './my-new-component.component.html',  // Path to the HTML template
  styleUrls: ['./my-new-component.component.css']   // Path to the styles
})
export class MyNewComponent {
  // Property to store a greeting message
  greeting: string = 'Hello, Angular!';

  // Method to change the greeting message
  changeGreeting(newGreeting: string): void {
    this.greeting = newGreeting;
  }
}
