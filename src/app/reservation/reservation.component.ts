import { Component, OnInit, ViewEncapsulation, NgModule } from '@angular/core';
import { iM } from '@angular/core/src/render3';
import { Table } from '../shared/Table';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReservationComponent implements OnInit {
  tabsize: Table[] = [
    {id:1, name:'1 person'},
    {id:2, name:'2 persons'},
    {id:3, name:'3 persons'},
    {id:4, name:'4 persons'}
  ];


  constructor() { }

  ngOnInit() {
  }

}
