import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: 'angular-example';

  // all component lifecycle methods in order
  constructor() {
    console.log('App: Constructor()');
  }

  ngOnInit(): void {
    console.log('App: OnInit()');
  }
}
