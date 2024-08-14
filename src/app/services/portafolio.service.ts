import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {
  private URL_BASE = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<any> {
    return this.http.get<any>(this.URL_BASE + '/proyectos');
  }

  getSkills(): Observable<any> {
    return this.http.get<any>(this.URL_BASE + '/habilidades');
  }
}
