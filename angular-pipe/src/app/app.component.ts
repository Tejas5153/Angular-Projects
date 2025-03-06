import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TitleCasePipe } from './title-case.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,TitleCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-pipes';
  currentDate = new Date();
  price = 12345.6789;
  message = 'hello angular world';
  text = 'hello angular world';
}
