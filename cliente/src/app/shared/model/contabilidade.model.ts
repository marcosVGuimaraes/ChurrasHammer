import { Compra } from "./compra.model";

export interface Contabilidade{
    totalArrecado: number,
    totalGastoCompras: number,
    totalGastoComida: number,
    totalGastoBebida: number,
    compra: Compra[] 
}