import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LocalStorageService } from '../../services/local-storage.service';
import { PacienteInfo } from '../../shared/types/paciente';
import { CadastroAgendamento, CadastroAgendamentoModel } from '../../shared/types/agendamento';
import { AgendamentoFacade } from '../../facade/agendamento-facade.service';
import { ObserverService } from '../../services/observer.service';

@Component({
  selector: 'app-agendamento',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule,MatButton,
  ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './agendamento.component.html',
  styleUrl: './agendamento.component.css'
})
export class AgendamentoComponent implements OnInit{
  formBuilder = inject(FormBuilder)
  localStorage = inject(LocalStorageService)
  observerService = inject(ObserverService)
  agendamentoFacade = inject(AgendamentoFacade)
  paciente!:PacienteInfo | null

  cadastroAgendamentoForm = this.formBuilder.group({
    pacienteNome: ['', Validators.required],
    pacienteDataNascimento: ['', Validators.required],
    dataAgendamento: ['', Validators.required],
    horarioAgendamento: ['', Validators.required],
  });

  ngOnInit(): void {
    this.PreencherFormComPacienteInfo();
    this.observerService.agendamento$.subscribe({
      next(value) {
          console.log(value)
      },
    })
  }

  private PreencherFormComPacienteInfo() {
    this.paciente = this.localStorage.getPacienteInfo();
    if (this.paciente) {
      this.cadastroAgendamentoForm.patchValue({
        pacienteNome: this.paciente.nome,
        pacienteDataNascimento: this.paciente.dataNascimento.toString()
      });
    }
  }

  onSubmit(){
    if(this.cadastroAgendamentoForm.valid){
      // console.log(this.cadastroAgendamentoForm.value)
      const cadastro: CadastroAgendamentoModel = {
        agendamento: {
          data: this.cadastroAgendamentoForm.value.dataAgendamento!,
          horario: this.cadastroAgendamentoForm.value.horarioAgendamento!
        },
        paciente:{
          id: this.paciente ? this.paciente.id : null,
          nome: this.cadastroAgendamentoForm.value.pacienteNome!,
          dataNascimento: this.cadastroAgendamentoForm.value.pacienteDataNascimento!,
        }
      }
      this.agendamentoFacade.cadastrarAgendamento(cadastro).subscribe({
        //loading service
        next: (value) => {
            console.log(value)
            this.observerService.addAgendamento(value.agendamento)
            this.localStorage.setPacienteInfo(value.paciente)
            //toastService
        },
        error(err) {
            console.log(err.error.errors)
        },
        complete() {
            //loading service
        },
      })
    }
  }

}
