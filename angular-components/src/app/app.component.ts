import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyNewComponent } from "./components/my-new-component/my-new-component.component";

import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MyNewComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'firstAngularExample';
}
