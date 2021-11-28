import { Routes } from "@angular/router";

import { HeaderComponent } from "../header/header.component";
import { MenuComponent } from "../menu/menu.component";
import { ReservationComponent } from "../reservation/reservation.component";
import { SpecialsComponent } from "../specials/specials.component";
import { ContactComponent } from "../contact/contact.component";
import { StartersComponent } from "../starters/starters.component";
import { MainDishesComponent } from "../main-dishes/main-dishes.component";
import { DrinksComponent } from "../drinks/drinks.component";
import { DessertsComponent } from "../desserts/desserts.component";
import { AppComponent } from "../app.component";

export const routes: Routes = [
    {path: 'home', redirectTo: 'HeaderComponent', pathMatch: 'full'},
    {path: 'menu', component: MenuComponent},
    {path: 'starters', component:StartersComponent},
    {path: 'dishes', component:MainDishesComponent},
    {path: 'drinks', component:DrinksComponent},
    {path: 'desserts', component:DessertsComponent},
    {path: 'reservation',component: ReservationComponent},
    {path: 'specials', component:SpecialsComponent},
    {path: 'contact',component:ContactComponent},
    {path: '', redirectTo:'/home', pathMatch: 'full'}
];