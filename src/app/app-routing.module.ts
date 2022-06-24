import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './COMPONENTS/display/display.component';
import { HomeComponent } from './COMPONENTS/home/home.component';
import { PropertiesComponent } from './COMPONENTS/properties/properties.component';
import { LocationComponent } from './PAGES/location/location.component';
import { PropertiesDetailsComponent } from './PAGES/properties-details/properties-details.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'properties', component: PropertiesComponent},
  {path:'display', component: DisplayComponent},
  {path: 'locations', component: LocationComponent},
  {path:'details', component: PropertiesDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
