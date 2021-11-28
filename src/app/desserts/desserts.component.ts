import { Component, OnInit } from '@angular/core';
import { desserts } from '../shared/dishes';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DessertsComponent implements OnInit {
  Desserts = desserts;

  constructor() { }

  ngOnInit() {
  }

}
