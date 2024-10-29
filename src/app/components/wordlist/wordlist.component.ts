// src/app/components/wordlist/wordlist.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordService } from '../../services/word.service';

@Component({
  selector: 'app-wordlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wordlist.component.html',
  styleUrls: ['./wordlist.component.css']
})
export class WordlistComponent implements OnInit {

  words: string[] = [];

  constructor(private wordService: WordService) { }

  ngOnInit(): void {
    this.wordService.getWords().subscribe((data: string[]) => {
      this.words = data;
    });
  }
}
