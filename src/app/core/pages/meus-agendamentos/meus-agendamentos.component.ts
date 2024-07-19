import { Component, inject, OnInit } from '@angular/core';
import { AgendamentoFacade } from '../../facade/agendamento-facade.service';
import { Agendamento } from '../../shared/types/agendamento';
import { PacienteFacade } from '../../facade/paciente-facade.service';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-meus-agendamentos',
  standalone: true,
  imports: [MatTableModule, DatePipe, MatIcon],
  templateUrl: './meus-agendamentos.component.html',
  styleUrl: './meus-agendamentos.component.css'
})
export class MeusAgendamentosComponent implements OnInit{
  pacienteFacade = inject(PacienteFacade)
  agendamentos: Agendamento[] = [];
  displayedColumns: string[] = ['data', 'horario', 'status', 'realizado'];

  ngOnInit(): void {
    this.pacienteFacade.ListarMeusAgendamentos().subscribe({
      next:(value) => {
          this.agendamentos = value
      }
    });
  }

}
