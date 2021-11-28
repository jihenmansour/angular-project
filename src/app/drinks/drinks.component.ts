import { Component, OnInit } from '@angular/core';
import { drinks } from '../shared/dishes';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DrinksComponent implements OnInit {
Drinks = drinks;

  constructor() { }

  ngOnInit() {
  }

}
