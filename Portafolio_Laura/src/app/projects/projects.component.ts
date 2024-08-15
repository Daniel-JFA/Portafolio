import { Component } from '@angular/core';
import { PortafolioService } from '../services/portafolio.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects:any= []
  constructor(private portafolioSerive: PortafolioService){
}

private getProjects(): void {
  this.portafolioSerive.getProjects().subscribe({
    next: (response) => {
      this.projects = response;
    },
    error: (error) => {
      console.error(error);
    },
  });
}

ngOnInit(): void {
this.getProjects()
}


}
