import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  toMenu(){
    document.getElementById("menu").scrollIntoView({behavior:"smooth"});
  }
  toContact(){
    document.getElementById("contact").scrollIntoView({behavior:"smooth"});
  }
  toReservation(){
    document.getElementById("reservation").scrollIntoView({behavior:"smooth"});
  }
  toSpecials(){
    document.getElementById("specials").scrollIntoView({behavior:"smooth"});
  }


  constructor() { }

  ngOnInit() {
  }

}
