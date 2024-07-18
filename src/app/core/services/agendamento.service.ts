import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { CadastroAgendamento, CadastroAgendamentoModel } from '../shared/types/agendamento';
import { Horario } from '../shared/types/horarios';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  _http = inject(HttpClient);
  APIurl = environment.api
  constructor() { }

  cadastrarAgendamento(cadastro: CadastroAgendamentoModel): Observable<CadastroAgendamento>{
    return this._http.post<CadastroAgendamento>(`${this.APIurl}/api/agendamento`, cadastro)
  }

  ListarHorariosDeDia(dia: string): Observable<Horario[]>{
    return this._http.get<Horario[]>(`${this.APIurl}/api/agendamento/horarios/${dia}`)
  }

}
