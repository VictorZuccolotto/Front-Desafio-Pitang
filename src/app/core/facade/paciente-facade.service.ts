import { inject, Injectable } from '@angular/core';
import { PacienteService } from '../services/paciente.service';
import { LocalStorageService } from '../services/local-storage.service';
import { PacienteInfo } from '../shared/types/paciente';
import { catchError, map, Observable, of } from 'rxjs';
import { Agendamento } from '../shared/types/agendamento';

@Injectable({
  providedIn: 'root'
})
export class PacienteFacade {
  pacienteService = inject(PacienteService)
  localStorageService = inject(LocalStorageService)
  constructor() { }

  ListarMeusAgendamentos(): Observable<Agendamento[]>{
    const paciente:PacienteInfo | null = this.localStorageService.getPacienteInfo()
    if(paciente)
      return this.pacienteService.ListarMeusAgendamentos(paciente.id).pipe(
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
    else
      throw Error("Voce não está \"Logado\"");
  }
}
