import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,HighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isVisible = true;  
  items = ['Item 1', 'Item 2', 'Item 3'];

  toggleVisibility() {
    this.isVisible = !this.isVisible; 
  }

  currentDate = new Date();

}
