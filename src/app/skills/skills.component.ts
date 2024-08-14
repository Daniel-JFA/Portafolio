import { Component, Input } from '@angular/core';
import { PortafolioService } from '../services/portafolio.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  @Input() percentage: number = 0;
  skills: any = []

  constructor(private portafolioSerive: PortafolioService){
  }

  private getSkills(): void {
    this.portafolioSerive.getSkills().subscribe({
      next: (response) => {
        this.skills = response;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  ngOnInit(): void {
    this.getSkills()
    }
}

