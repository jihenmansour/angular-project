import { Component, OnInit } from '@angular/core';
import { starters } from '../shared/dishes';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-starters',
  templateUrl: './starters.component.html',
  styleUrls: ['./starters.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StartersComponent implements OnInit {
  Starters= starters;

  constructor() { }

  ngOnInit() {
  }

}
