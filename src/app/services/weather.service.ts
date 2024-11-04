import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = 'KTxsG7yJXzBUdmbUggzWq573XSPq7K5n';  // Replace with your actual API key from Tomorrow.io
  private apiUrl = 'https://api.tomorrow.io/v4/weather/forecast';

  constructor(private http: HttpClient) {}

  getWeather(lat: number, lon: number): Observable<any> {
    const params = new HttpParams()
      .set('location', `${lat},${lon}`)
      .set('apikey', this.apiKey);

    return this.http.get<any>(this.apiUrl, { params });
  }
}
