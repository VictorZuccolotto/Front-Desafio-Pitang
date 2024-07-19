import { inject, Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { Agendamento } from '../shared/types/agendamento';
import { PacienteInfo } from '../shared/types/paciente';

@Injectable({
  providedIn: 'root'
})
export class ObserverService {
  localStorageService = inject(LocalStorageService)
  private agendamentosSubject = new BehaviorSubject<Agendamento[]>([]);
  public agendamento$ = this.agendamentosSubject.asObservable();

  private pacienteSubject = new BehaviorSubject<PacienteInfo | null>(null);
  public paciente$ = this.pacienteSubject.asObservable();


  constructor() {
    const agendamentos: Agendamento[] | null = this.localStorageService.getAgendamentos();
    if(agendamentos){
      this.agendamentosSubject.next(agendamentos);
    }
    const paciente: PacienteInfo | null = this.localStorageService.getPacienteInfo();
    if(paciente){
      this.pacienteSubject.next(paciente);
    }
   }

  addAgendamento(agendamento: Agendamento):void{
    this.agendamentosSubject.next([...this.agendamentosSubject.value,agendamento])
    this.localStorageService.setAgendamentos(this.getAgendamentos())
  }

  getAgendamentos(): Agendamento[]{
    return this.agendamentosSubject.value;
  }

  setPaciente(paciente: PacienteInfo){
    this.pacienteSubject.next(paciente)
    this.localStorageService.setPacienteInfo(this.getPaciente()!)
  }

  getPaciente():PacienteInfo | null{
    return this.pacienteSubject.value;
  }
  
}
