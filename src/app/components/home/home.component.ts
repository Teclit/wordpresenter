import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Word Presenter';

  currentYear: number;

  constructor() {
    this.currentYear = new Date().getFullYear();
  }
}
