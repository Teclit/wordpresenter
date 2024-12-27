import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-showbox',
  standalone: false,

  templateUrl: './showbox.component.html',
  styleUrl: './showbox.component.css'
})
export class ShowBoxComponent {
  @Input() text: string = '';

}
