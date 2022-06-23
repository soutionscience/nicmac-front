import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './COMPONENTS/display/display.component';
import { HomeComponent } from './COMPONENTS/home/home.component';
import { PropertiesComponent } from './COMPONENTS/properties/properties.component';
import { LocationComponent } from './PAGES/location/location.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'properties', component: PropertiesComponent},
  {path:'display', component: DisplayComponent},
  {path: 'locations', component: LocationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
