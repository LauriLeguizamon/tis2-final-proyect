import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalidadComponent } from './pages/personalidad/personalidad.component';
import { ValoresComponent } from './pages/valores/valores.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';
import { InteresesComponent } from './pages/intereses/intereses.component';
import { HomeComponent } from './pages/home/home.component';
import { ConclusionComponent } from './pages/conclusion/conclusion.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalidadComponent,
    ValoresComponent,
    HabilidadesComponent,
    InteresesComponent,
    HomeComponent,
    ConclusionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
