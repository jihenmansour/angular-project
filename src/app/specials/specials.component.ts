import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { specials } from '../shared/dishes';
@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SpecialsComponent implements OnInit {
    Specials = specials;
  constructor() { }

  ngOnInit() {
  }

}
