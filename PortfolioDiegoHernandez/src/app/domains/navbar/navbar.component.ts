import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() sectionChange = new EventEmitter<string>();

  navigate(section: string): void {
    this.sectionChange.emit(section);
  }

}
