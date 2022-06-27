import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './COMPONENTS/home/home.component';
import { PropertiesComponent } from './COMPONENTS/properties/properties.component';
import { DisplayComponent } from './COMPONENTS/display/display.component';
import { PlotsComponent } from './COMPONENTS/plots/plots.component';
import { LocationComponent } from './PAGES/location/location.component';
import { CarouselComponent } from './COMPONENTS/carousel/carousel.component';
import { PropertiesDetailsComponent } from './PAGES/properties-details/properties-details.component';
import { FeaturesComponent } from './COMPONENTS/features/features.component';
import { ContactFormComponent } from './COMPONENTS/contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PropertyDisplayComponent } from './COMPONENTS/property-display/property-display.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PropertiesComponent,
    DisplayComponent,
    PlotsComponent,
    LocationComponent,
    CarouselComponent,
    PropertiesDetailsComponent,
    FeaturesComponent,
    ContactFormComponent,
    PropertyDisplayComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
