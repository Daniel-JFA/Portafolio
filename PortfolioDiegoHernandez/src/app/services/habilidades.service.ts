import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HabilidadesService {
  habilidades =  [
    { "id": 1, "habilidad": "Angular", "nivel": "Avanzado" },
      { "id": 2, "habilidad": "JavaScript", "nivel": "Avanzado" }
  ];
 
  getHabilidades(): any {
    return this.habilidades;
  }
}