import { Component,inject } from '@angular/core';

import { ProyectoService } from '../../services/proyecto.service';
@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
  
 proyectService=inject(ProyectoService);
 proyectos:any=this.proyectService.getProyectos();
   
}
