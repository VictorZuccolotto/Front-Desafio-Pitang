import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ObserverService } from '../../../services/observer.service';

@Component({
  selector: 'app-notification-nav-item',
  standalone: true,
  imports: [MatTooltipModule,MatIconModule, MatBadgeModule],
  templateUrl: './notification-nav-item.component.html',
  styleUrl: './notification-nav-item.component.css'
})
export class NotificationNavItemComponent implements OnInit{
  quantidadeAgendamentos:number = 0;
  observerService = inject(ObserverService)
  constructor(){}
  ngOnInit(): void {
    this.observerService.agendamento$.subscribe({
      next:(value) => {
        this.quantidadeAgendamentos = this.observerService.getAgendamentos().length
      },
    })
  }
}
