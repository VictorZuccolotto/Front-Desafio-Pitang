import { PacienteInfo } from "./paciente"

export type AgendamentoModel = {
    data : string
    horario: string
}

export type Agendamento = {
    data : Date
    horario: string
    status ?: string
    realizado ?: boolean
}

export type CadastroAgendamento = {
    agendamento: Agendamento
    paciente: PacienteInfo
}

export type CadastroAgendamentoModel = {
    agendamento: AgendamentoModel
    paciente: PacienteInfo
}