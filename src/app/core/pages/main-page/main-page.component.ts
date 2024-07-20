import { Component, inject, OnInit } from '@angular/core';
import { AgendamentoService } from '../../services/agendamento.service';
import { AgendamentoFacade } from '../../facade/agendamento-facade.service';
import { CadastroAgendamento } from '../../shared/types/agendamento';
import { LocalStorageService } from '../../services/local-storage.service';
import { PacienteInfo } from '../../shared/types/paciente';
import { PacienteFacade } from '../../facade/paciente-facade.service';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Horario } from '../../shared/types/horarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MatTableModule, DatePipe, MatIconModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit{
  router = inject(Router)
  agendamentoService = inject(AgendamentoFacade)
  horarios: Horario[] = [];
  displayedColumns: string[] = ['data', 'horario', 'disponivel', 'quantidadePacientes'];


  ngOnInit(): void {
    this.agendamentoService.ListarHorariosDeDia(new Date).subscribe({
      next:(value) => {
          this.horarios = value;
      },
    })
  }

  onRowClick(linha:Horario){
    if(linha.disponivel){
      this.router.navigate(['agendamento'],{queryParams: {data: linha.data.toISOString(), horario: linha.horario}})
    }
  }

}
