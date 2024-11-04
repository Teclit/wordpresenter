import {WeatherService} from '../../services/weather.service';
import {Component} from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  weatherData: any;
  dailyData: any;
  weatherDataList: any[] = [];
  temperatureUnit: string = 'C';
  windSpeedUnit: string = 'm/s';

  lat: number = 42.3478;  // Default latitude
  lon: number = -71.0466; // Default longitude

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(): void {
    this.weatherService.getWeather(this.lat, this.lon).subscribe({
      next: data => {
        this.weatherData = data;
        this.dailyData = data?.timelines?.daily[0]?.values; // Today's weather values
        this.weatherDataList.push({
          date: data?.timelines?.daily[0]?.time,
          temperature: this.dailyData.temperatureAvg
        });
      },
      error: err => console.error('Error fetching weather data', err)
    });
  }

  convertTemperature(temp: number): number {
    if (this.temperatureUnit === 'F') {
      return (temp * 9 / 5) + 32;
    }
    return temp;
  }

  convertWindSpeed(speed: number): number {
    switch (this.windSpeedUnit) {
      case 'km/h':
        return speed * 3.6;
      case 'mph':
        return speed * 2.237;
      default:
        return speed;
    }
  }

  updateLocation(newLat: string, newLon: string): void {
    this.lat = parseFloat(newLat);
    this.lon = parseFloat(newLon);
    this.getWeather();
  }
}
