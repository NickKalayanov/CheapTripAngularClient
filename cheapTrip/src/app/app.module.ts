import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header/header.component';
import { StoreModule } from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CapitalLetterPipe } from './search-result/path-details/capitalFirstLetter.pipe';
import { TripDirectionModule } from './trip-direction/trip-direction.module';
import { TripDirectionEffects } from './trip-direction/store/trip-direction.effects';
import { EffectsModule } from '@ngrx/effects';
import { SearchResultModule } from './search-result/search-result.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CapitalLetterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TripDirectionModule,
    SearchResultModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([TripDirectionEffects])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
