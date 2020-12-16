import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  API_URLDATA: string =environment.APIUrl

  constructor(private http: HttpClient) { }

  getCurrent(): Observable<any> {
    return this.http.get(`${this.API_URLDATA}/weather?q=London&appid=c9602bfac3fb852224d20ec3c107f5eb`)
  }
}
