import { Component, inject, OnInit } from '@angular/core';
import { NotificationNavItemComponent } from "../notification-nav-item/notification-nav-item.component";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterModule } from '@angular/router';
import { LocalStorageService } from '../../../services/local-storage.service';
import { PacienteInfo } from '../../types/paciente';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule ,MatIconModule,MatToolbarModule ,NotificationNavItemComponent,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  localStorageService = inject(LocalStorageService)
  paciente!: PacienteInfo | null;
  ngOnInit(): void {
    this.paciente = this.localStorageService.getPacienteInfo();
  }
}
