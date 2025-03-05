import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() showModal: boolean = false; 
  @Output() close = new EventEmitter<void>(); 

  closeModal() {
    console.log('Modal Closed!');
    this.close.emit();
  }
}
