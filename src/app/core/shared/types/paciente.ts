export type PacienteInfo = {
    id: number
    nome: string
    dataNascimento: Date
}

export type PacienteInfoModel = {
    id: number | null
    nome: string
    dataNascimento: string
}