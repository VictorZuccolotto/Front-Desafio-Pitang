import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Agendamento } from '../shared/types/agendamento';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  _http = inject(HttpClient);
  APIurl = environment.api;
  constructor() { }

  ListarMeusAgendamentos(id: number): Observable<Agendamento[]>{
    const params = new HttpParams().set('pacienteId', id);
    return this._http.get<Agendamento[]>(`${this.APIurl}/api/paciente/agendamentos`, {params})
  }

}
