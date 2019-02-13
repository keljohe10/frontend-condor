import { map } from 'rxjs/internal/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  constructor(private http: HttpClient) {
    console.log('Servicio listo!!');
  }

  getClima() {
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=Bogota&APPID=16e0c6592e971ffff082cf41cf0ba6fb';
    return this.http.get( url );
  }
}
