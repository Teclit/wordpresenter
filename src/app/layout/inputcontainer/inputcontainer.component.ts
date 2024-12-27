import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inputcontainer',
  standalone: false,

  templateUrl: './inputcontainer.component.html',
  styleUrl: './inputcontainer.component.css'
})
export class InputContainerComponent {
  @Output() textSubmitted = new EventEmitter<string>();
  inputText: string = '';

  onSubmit() {
    this.textSubmitted.emit(this.inputText);
    this.inputText = '';
  }

}
