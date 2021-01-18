export interface Convidado{
    id_convidado?: number, //id opicional
    id_participante: number,
    nome: string,
    consumo_bebida: Boolean,
    convidado_por?: string //convidado_por opicional
}