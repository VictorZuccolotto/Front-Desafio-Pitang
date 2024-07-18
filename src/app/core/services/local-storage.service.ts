import { Injectable } from '@angular/core';
import { PacienteInfo } from '../shared/types/paciente';
import { Agendamento } from '../shared/types/agendamento';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getPacienteInfo():PacienteInfo | null{
    const item = localStorage.getItem('pacienteInfo')
    if(item){
        return JSON.parse(item) as PacienteInfo;
    }
    return null;
  }

  setPacienteInfo(paciente: PacienteInfo):void{
    localStorage.setItem('pacienteInfo', JSON.stringify(paciente))
  }

  setAgendamentos(agendamentos: Agendamento[]):void{
    localStorage.setItem('agendamentos', JSON.stringify(agendamentos))
  }

  getAgendamentos(): Agendamento[] | null{
    const item = localStorage.getItem('agendamentos')
    if(item){
        return JSON.parse(item) as Agendamento[];
    }
    return null;
  }

}
