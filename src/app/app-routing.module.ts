import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './components/client/client.component';
import { ClientRegistrationComponent } from './components/client-registration/client-registration.component';
import { ClientMapComponent } from './components/client-map/client-map.component';

const routes: Routes = [
  { path: '', component: ClientComponent },
  { path: 'registration', component: ClientRegistrationComponent },
  { path: 'map', component: ClientMapComponent },
  { path: 'home', component: ClientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
