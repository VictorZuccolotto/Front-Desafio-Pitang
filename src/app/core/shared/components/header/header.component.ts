import { Component, inject, OnInit } from '@angular/core';
import { NotificationNavItemComponent } from "../notification-nav-item/notification-nav-item.component";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterModule } from '@angular/router';
import { LocalStorageService } from '../../../services/local-storage.service';
import { PacienteInfo } from '../../types/paciente';
import { ObserverService } from '../../../services/observer.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule ,MatIconModule,MatToolbarModule ,NotificationNavItemComponent,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  observerService = inject(ObserverService)
  paciente!: PacienteInfo | null;
  ngOnInit(): void {
    this.observerService.paciente$.subscribe({
      next:(value) => {
          this.paciente = value
      },
    })
  }
}
