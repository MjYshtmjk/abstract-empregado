import { Empregado } from "./Empregado";

export class Horista extends Empregado {

    private ValorHoras: number;
    private HorasTrabalhadas: number;

    public constructor(_nome: string, _cpf: string,_valorHoras: number, _horasTrabalhadas: number,) {
        super(_nome, _cpf);
        this.ValorHoras = _valorHoras;
        this.HorasTrabalhadas = _horasTrabalhadas;
    }
    public setValorHoras(_valorHoras: number): void {
        this.ValorHoras = _valorHoras;
    }

    public getValorHoras(): number {
        return this.ValorHoras;
    }

    public setHorasTrabalhadas(_horasTrabalhadas: number): void {
        this.HorasTrabalhadas = _horasTrabalhadas;
    }

    public getHorasTrabalhadas(): number {
        return this.HorasTrabalhadas;
    }

    
    public vencimento(): number {
        return this.ValorHoras + (this.ValorHoras * this.HorasTrabalhadas);
    }
}

