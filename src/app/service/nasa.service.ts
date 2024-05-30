import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(private http: HttpClient) { }

  getImageOfTheDay(): Observable<string>{
    return this.http.get<any>('https://api.nasa.gov/planetary/apod?api_key=uPwfYwI8qPWc9lOiTsZULchfAdUD2Ue3yQgVL5gs')
    .pipe(
      map(data => data.url)
    )
  }
}
