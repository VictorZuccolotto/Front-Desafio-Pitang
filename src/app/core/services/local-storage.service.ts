import { Injectable } from '@angular/core';
import { PacienteInfo } from '../shared/types/paciente';

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

  setPacienteInfo(paciente: PacienteInfo){
    localStorage.setItem('pacienteInfo', JSON.stringify(paciente))
  }
}
