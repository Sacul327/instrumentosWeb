import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InstrumentosComponent } from './instrumentos/instrumentos.component';
import { ReleasesComponent } from './releases/releases.component';
import { ArtistComponent } from './artist/artist.component';
import { GuitarrasComponent } from './guitarras/guitarras.component';
import { TecladosComponent } from './teclados/teclados.component';
import { AmpsComponent } from './amps/amps.component';
import { ReleaseBioComponent } from './release-bio/release-bio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    IndexComponent,
    InstrumentosComponent,
    ReleasesComponent,
    ArtistComponent,
    GuitarrasComponent,
    TecladosComponent,
    AmpsComponent,
    ReleaseBioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
