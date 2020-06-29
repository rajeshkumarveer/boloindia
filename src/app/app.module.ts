import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule,RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { MidhomeComponent } from './home/midhome/midhome.component';
import { UsericonComponent } from './reusable/usericon/usericon.component';
import { AppfooterComponent } from './reusable/appfooter/appfooter.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    MidhomeComponent,
    UsericonComponent,
    AppfooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
