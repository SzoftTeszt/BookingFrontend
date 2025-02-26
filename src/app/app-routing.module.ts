import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostelsComponent } from './hostels/hostels.component';
import { NewBookingsComponent } from './new-bookings/new-bookings.component';

const routes: Routes = [
  {path:"hostels", component:HostelsComponent},
  {path:"newbooking", component:NewBookingsComponent},
  {path:"", component:HostelsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
