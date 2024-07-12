import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ClientComponent } from './components/client/client.component';
import { ClientRegistrationComponent } from './components/client-registration/client-registration.component';
import { ClientMapComponent } from './components/client-map/client-map.component';
import { ClienteServiceComponent } from './components/cliente-service/cliente-service.component';
import { FormsModule } from '@angular/forms';
import { ClientModalComponent } from './components/client-modal/client-modal.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ClientRegistrationComponent,
    ClientMapComponent,
    ClienteServiceComponent,
    ClientModalComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    FormsModule,
  ],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
