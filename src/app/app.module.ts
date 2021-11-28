import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';



import { AppComponent } from './app.component';

import 'hammerjs';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { MatListModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { StartersComponent } from './starters/starters.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SpecialsComponent } from './specials/specials.component';
import { ContactComponent } from './contact/contact.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { MainDishesComponent } from './main-dishes/main-dishes.component';
import { DrinksComponent } from './drinks/drinks.component';
import { DessertsComponent } from './desserts/desserts.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    StartersComponent,
    ReservationComponent,
    SpecialsComponent,
    ContactComponent,
    MainDishesComponent,
    DrinksComponent,
    DessertsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule ,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgbModule,
    AppRoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
