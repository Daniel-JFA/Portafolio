import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProyectoService {
  proyectos =  [
    { "id": 1, "nombre": "Proyecto 1", "descripcion": "Descripción del proyecto 1", "url": "https://mi-proyecto-1.com" },
      { "id": 2, "nombre": "Proyecto 2", "descripcion": "Descripción del proyecto 2", "url": "https://mi-proyecto-2.com" },
      { "id": 3, "nombre": "Proyecto 3", "descripcion": "Descripción del proyecto 3", "url": "https://mi-proyecto-3.com" },
      { "id": 4, "nombre": "Proyecto 4", "descripcion": "Descripción del proyecto 4", "url": "https://mi-proyecto-4.com" }
  ];
 
  getProyectos(): any {
    return this.proyectos;
  }
}