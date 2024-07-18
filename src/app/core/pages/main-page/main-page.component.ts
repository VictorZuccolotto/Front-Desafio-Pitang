import { Component, inject, OnInit } from '@angular/core';
import { AgendamentoService } from '../../services/agendamento.service';
import { AgendamentoFacade } from '../../facade/agendamento-facade.service';
import { CadastroAgendamento } from '../../shared/types/agendamento';
import { LocalStorageService } from '../../services/local-storage.service';
import { PacienteInfo } from '../../shared/types/paciente';
import { PacienteFacade } from '../../facade/paciente-facade.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit{
  
  agendamentoService = inject(AgendamentoFacade)
  pacienteService = inject(PacienteFacade)
  localStorageService = inject(LocalStorageService)
  
  ngOnInit(): void {
    const data = new Date();
    console.log(data.toISOString());
    // data.setDate(data.getDate() - 1);
    // console.log(data.toISOString());
    // this.agendamentoService.ListarHorariosDeDia(data).subscribe({
    //   next(value) {
    //       console.log(value)
    //   },
    // })
    const cadastro: CadastroAgendamento = {
      agendamento:{
        data: new Date(),
        horario: "10:00:00"
      },
      paciente: {
        id: 4,
        nome: 'Victor',
        dataNascimento: new Date("2000-04-22")
      }
    }
    console.log(cadastro)
    // this.agendamentoService.cadastrarAgendamento(cadastro).subscribe({
    //   next(value) {
    //       console.log(value)
    //   },
    //   error(err) {
    //       console.log(err)
    //   },
    // });

    // const paciente:PacienteInfo = {
    //   id: 4,
    //   nome: "Victor",
    //   dataNascimento: new Date("2000-04-22T00:00:00.000Z")
    // }

    // this.localStorageService.setPacienteInfo(paciente);


    // this.pacienteService.ListarMeusAgendamentos().subscribe({
    //   next(value) {
    //       console.log(value)
    //   },
    // })
  }

}
