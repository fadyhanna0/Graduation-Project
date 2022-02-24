// import { Component, OnInit, ViewChild } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss'],
// })
// export class HomeComponent implements OnInit {
//   list = [1, 2, 3, 4, 5, 6];
//   constructor() {}

//   ngOnInit(): void {}
// }

import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from 'ngx-bootstrap/carousel';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    { provide: CarouselComponent, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ]
})

export class HomeComponent implements OnInit {
    list = [1, 2, 3, 4, 5, 6];
    constructor() {}
  
    ngOnInit(): void {}
  }