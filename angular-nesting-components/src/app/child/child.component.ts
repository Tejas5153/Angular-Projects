import { Component,Input,Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() childMessage: string = '';
  @Output() sendMessage: EventEmitter<string> = new EventEmitter(); // Event emitter to send data to parent

  // Method to emit a message to the parent
  sendToParent() {
    this.sendMessage.emit('Hello from Child!');
  }


}
