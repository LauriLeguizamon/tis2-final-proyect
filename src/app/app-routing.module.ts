import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';
import { HomeComponent } from './pages/home/home.component';
import { InteresesComponent } from './pages/intereses/intereses.component';
import { PersonalidadComponent } from './pages/personalidad/personalidad.component';
import { ValoresComponent } from './pages/valores/valores.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'habilidades',
    component: HabilidadesComponent,
  },
  {
    path: 'intereses',
    component: InteresesComponent,
  },
  {
    path: 'personalidad',
    component: PersonalidadComponent,
  },
  {
    path: 'valores',
    component: ValoresComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
