import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  public appKey = '7c025c75ea02ef7f0c4702f9bd7dd2c2';
  public apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';

  constructor(private http: HttpClient) {}

  searchWeatherData(location): Observable<any> {
    let queryParam = location + '&appid=' + this.appKey;
    return this.http
      .get(this.apiUrl + queryParam)
      .pipe(
        catchError((error) =>
          throwError('Error occurred while retrieving logged in user: ' + error)
        )
      );
  }

}
