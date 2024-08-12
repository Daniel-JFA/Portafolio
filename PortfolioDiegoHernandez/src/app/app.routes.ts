import { Routes } from '@angular/router';
import { ProyectosComponent } from './domains/proyectos/proyectos.component';
import { HabilidadesComponent } from './domains/habilidades/habilidades.component';
import { ContactoComponent } from './domains/contacto/contacto.component';
export const routes: Routes = [  { path: '', redirectTo: '/proyectos', pathMatch: 'full' },
    { path: 'proyectos', component: ProyectosComponent },
    { path: 'habilidades', component: HabilidadesComponent },
    { path: 'contacto', component: ContactoComponent }];
