import { Component, EventEmitter, Output } from '@angular/core';
import { WordsService } from '../../services/words.service';

@Component({
  selector: 'app-inputcontainer',
  standalone: false,
  templateUrl: './inputcontainer.component.html',
  styleUrls: ['./inputcontainer.component.css'],
})
export class InputContainerComponent {
  @Output() textSubmitted = new EventEmitter<any>();
  inputText: string = '';

  constructor(private wordsService: WordsService) {}

  onSubmit() {
    this.wordsService.analyzeText(this.inputText).subscribe((response) => {
      this.textSubmitted.emit(response);
      this.inputText = '';
    });
  }
}
