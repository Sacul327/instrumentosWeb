import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ReleasesComponent } from './releases/releases.component';
import { InstrumentosComponent } from './instrumentos/instrumentos.component';
import { ArtistComponent } from './artist/artist.component';
import { GuitarrasComponent } from './guitarras/guitarras.component';
import { TecladosComponent } from './teclados/teclados.component';
import { AmpsComponent } from './amps/amps.component';
import { ReleaseBioComponent } from './release-bio/release-bio.component';


const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'releases', component: ReleasesComponent },
  { path: 'instrumentos', component: InstrumentosComponent },
  { path: 'artist', component: ArtistComponent },
  { path: 'guitars', component: GuitarrasComponent },
  { path: 'keys', component: TecladosComponent },
  { path: 'amps', component: AmpsComponent },
  { path: 'release/:id', component: ReleaseBioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
