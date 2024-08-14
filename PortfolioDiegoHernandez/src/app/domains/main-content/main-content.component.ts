import { Component,Input } from '@angular/core';
import { ProyectosComponent } from '../proyectos/proyectos.component';
import { HabilidadesComponent } from '../habilidades/habilidades.component';
import { ContactoComponent } from '../contacto/contacto.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [ProyectosComponent,HabilidadesComponent,ContactoComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {
  
  @Input() currentSection: string = '';
}
