import { Component,inject } from '@angular/core';
import { HabilidadesService } from '../../services/habilidades.service';
@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.css'
})
export class HabilidadesComponent {
  habilidadService=inject(HabilidadesService);
  habilidades:any=this.habilidadService.getHabilidades();
}
