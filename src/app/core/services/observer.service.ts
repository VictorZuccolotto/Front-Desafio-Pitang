import { inject, Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { BehaviorSubject } from 'rxjs';
import { Agendamento } from '../shared/types/agendamento';

@Injectable({
  providedIn: 'root'
})
export class ObserverService {
  localStorageService = inject(LocalStorageService)
  private agendamentosSubject = new BehaviorSubject<Agendamento[]>([]);
  public agendamento$ = this.agendamentosSubject.asObservable();

  constructor() {
    const agendamentos: Agendamento[] | null = this.localStorageService.getAgendamentos();
    if(agendamentos){
      this.agendamentosSubject.next(agendamentos);
    }
   }

  addAgendamento(agendamento: Agendamento):void{
    this.agendamentosSubject.next([...this.agendamentosSubject.value,agendamento])
    this.localStorageService.setAgendamentos(this.getAgendamentos())
  }

  getAgendamentos(): Agendamento[]{
    return this.agendamentosSubject.value;
  }


  
}
