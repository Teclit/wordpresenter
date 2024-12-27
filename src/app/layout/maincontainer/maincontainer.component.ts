import { Component } from '@angular/core';

@Component({
  selector: 'app-maincontainer',
  standalone: false,

  templateUrl: './maincontainer.component.html',
  styleUrl: './maincontainer.component.css'
})
export class MainContainerComponent {
  submittedText: string = '';

  onTextSubmitted(text: string) {
    this.submittedText = text;
  }
}
