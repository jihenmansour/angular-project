import { Component, OnInit } from '@angular/core';
import { maindishes } from '../shared/dishes';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-main-dishes',
  templateUrl: './main-dishes.component.html',
  styleUrls: ['./main-dishes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainDishesComponent implements OnInit {
  MainDishes = maindishes;

  constructor() { }

  ngOnInit() {
  }

}
