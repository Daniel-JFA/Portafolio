import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './domains/navbar/navbar.component';
import { FooterComponent } from './domains/footer/footer.component';
import { MainContentComponent } from './domains/main-content/main-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,FooterComponent,MainContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PortfolioAngular';
  selectedSection: string = 'proyectos';

  onSectionChange(section: string): void {
    this.selectedSection = section;
  }
}
