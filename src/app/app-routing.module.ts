import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './COMPONENTS/home/home.component';
import { PropertiesComponent } from './COMPONENTS/properties/properties.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'properties', component: PropertiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
