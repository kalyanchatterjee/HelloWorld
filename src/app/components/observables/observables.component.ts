import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  // Terminology:
  // When an observable does something, it's called an emit. 

  constructor() { }

  ngOnInit(): void {
    const weather = new Observable(subscriber => {
      console.log('I am the weather. I am being observed now');
      subscriber.next('rain');
      subscriber.next('sun');
      subscriber.next('cloudy')
    });

    console.log("Let's observe the weather");
    // x is the observer
    weather.subscribe(x => console.log(x));
  }


}
