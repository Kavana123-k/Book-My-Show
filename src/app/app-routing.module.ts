import { PhysicalGiftCardComponent } from './giftcards/physical-gift-card/physical-gift-card.component';
import { ComboComponent } from './giftcards/combo/combo.component';
import { OcassionComponent } from './giftcards/ocassion/ocassion.component';
import { AllGiftCardComponent } from './giftcards/all-gift-card/all-gift-card.component';
import { SportsComponent } from './sports/sports.component';
import { PlaysComponent } from './plays/plays.component';
import { OffersComponent } from './offers/offers.component';
import { EventsComponent } from './events/events.component';
import { CorporatesComponent } from './corporates/corporates.component';
import { BuzzComponent } from './buzz/buzz.component';
import { ActivitiesComponent } from './activities/activities.component';
import { GiftcardsComponent } from './giftcards/giftcards.component';
import { StreamComponent } from './stream/stream.component';
import { MoviesComponent } from './movies/movies.component';
import { HeaderComponent } from './header/header.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListyourshowComponent } from './listyourshow/listyourshow.component';
import { GenericComponent } from './giftcards/generic/generic.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'stream', component: StreamComponent },
  { path: 'giftcards', component: GiftcardsComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'buzz', component: BuzzComponent },
  { path: 'corporates', component: CorporatesComponent },
  { path: 'events', component: EventsComponent },
  { path: 'listyourshow', component: ListyourshowComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'plays', component: PlaysComponent },
  { path: 'all-gift-card', component: AllGiftCardComponent },
  { path: 'generic', component: GenericComponent },
  { path: 'ocassion', component: OcassionComponent },
  { path: 'combo', component: ComboComponent },
  { path: 'physical-gift-card', component: PhysicalGiftCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
