import { inject, Injectable } from '@angular/core';
import { AgendamentoService } from '../services/agendamento.service';
import { catchError, map, Observable, of } from 'rxjs';
import { CadastroAgendamento, CadastroAgendamentoModel } from '../shared/types/agendamento';
import { Horario } from '../shared/types/horarios';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoFacade {
  agendamentoService = inject(AgendamentoService)
  constructor() { }

  cadastrarAgendamento(cadastro: CadastroAgendamento): Observable<CadastroAgendamento>{
    const cadastroConvertido: CadastroAgendamentoModel = {
      agendamento: {
                    data: cadastro.agendamento.data.toISOString(),
                    horario: cadastro.agendamento.horario
                },
      paciente: {...cadastro.paciente}
    }
    return this.agendamentoService.cadastrarAgendamento(cadastroConvertido).pipe(
      map(cadastro => {
        return {
          agendamento: {
                        data: new Date(cadastro.agendamento.data),
                        horario: cadastro.agendamento.horario
                    },
          paciente: {...cadastro.paciente}
      }}),
    );
  }

  ListarHorariosDeDia(dia: Date): Observable<Horario[]>{
    return this.agendamentoService.ListarHorariosDeDia(dia.toISOString()).pipe(
      map(horarios => {
        return horarios.map(horario => ({
          ...horario,
          data: new Date(horario.data),
        }));
      }),
      catchError(error => {
        console.error('Erro ao converter horários:', error);
        return of([]);
      })
    );
  }
}
