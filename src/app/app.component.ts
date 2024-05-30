import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NasaService } from './service/nasa.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'q-nasa';
  

  constructor(private nasaService: NasaService) {
    this.getImageOfTheDay()
  }

  imageOfTheDay: string = ""

  getImageOfTheDay(){
    this.nasaService.getImageOfTheDay().subscribe(data => {
      this.imageOfTheDay = data
      console.log("imag nasa", data);
      
    })
  }
}
