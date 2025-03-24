import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordsService {
  private apiUrl = 'http://localhost:8080/api/text/analyze';

  constructor(private http: HttpClient) {}

  analyzeText(text: string): Observable<any> {
    return this.http.post(this.apiUrl, { text });
  }

}