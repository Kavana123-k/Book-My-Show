import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StreamComponent } from './stream/stream.component';
import { EventsComponent } from './events/events.component';
import { PlaysComponent } from './plays/plays.component';
import { MoviesComponent } from './movies/movies.component';
import { SportsComponent } from './sports/sports.component';
import { ActivitiesComponent } from './activities/activities.component';
import { BuzzComponent } from './buzz/buzz.component';
import { ListyourshowComponent } from './listyourshow/listyourshow.component';
import { CorporatesComponent } from './corporates/corporates.component';
import { OffersComponent } from './offers/offers.component';
import { GiftcardsComponent } from './giftcards/giftcards.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchComponent } from './homepage/search/search.component';
import { AllGiftCardComponent } from './giftcards/all-gift-card/all-gift-card.component';
import { GenericComponent } from './giftcards/generic/generic.component';
import { OcassionComponent } from './giftcards/ocassion/ocassion.component';
import { ComboComponent } from './giftcards/combo/combo.component';
import { PhysicalGiftCardComponent } from './giftcards/physical-gift-card/physical-gift-card.component';
import { CardsComponent } from './giftcards/cards/cards.component';
import { MovieSlideComponent } from './movies/movie-slide/movie-slide.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StreamComponent,
    EventsComponent,
    PlaysComponent,
    MoviesComponent,
    SportsComponent,
    ActivitiesComponent,
    BuzzComponent,
    ListyourshowComponent,
    CorporatesComponent,
    OffersComponent,
    GiftcardsComponent,
    HomepageComponent,
    SearchComponent,
    AllGiftCardComponent,
    GenericComponent,
    OcassionComponent,
    ComboComponent,
    PhysicalGiftCardComponent,
    CardsComponent,
    MovieSlideComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
