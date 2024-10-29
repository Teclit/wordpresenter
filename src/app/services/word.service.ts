import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  private apiUrl = 'http://localhost:8080/api/words'; // URL du backend Spring Boot

  constructor(private http: HttpClient) {}

  getWords(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }
}
