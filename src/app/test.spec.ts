import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NasaService } from './service/nasa.service';
import { Observable, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('service should be created', () => {
    const service: NasaService = TestBed.inject(NasaService);
    expect(service).toBeTruthy();
  });

  it('service should have a "getImageOfTheDay" method which returns an Observable<string> object', () => {
    const service: NasaService = TestBed.inject(NasaService);
    service.getImageOfTheDay().subscribe((param_img: any) => {
      expect(param_img).toBeTruthy();
    });
  });

  it('should create a AppComponent instance', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('component should display an image', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const service: NasaService = TestBed.inject(NasaService);
    const mock: Observable<any> = of({
      url: 'https://apod.nasa.gov/apod/image/1903/IC405_Abolfath_3171.jpg',
    });

    spyOn(service, 'getImageOfTheDay').and.returnValue(mock);

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const content = compiled.querySelector('img').src;
    expect(content).toContain(fixture.componentInstance.imageOfTheDay);
  });
});