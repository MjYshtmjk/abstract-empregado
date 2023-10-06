import { Assalariado } from "./model/Assalariado";
import { Comissionado } from "./model/Comissionado";
import { Horista } from "./model/Horista";

const a1 = new Assalariado(`Miroslav Klose`,`201420142014`,1500);

a1.setNome(`Wesley Sneijder`);
a1.setCpf(`707070707070`);
a1.setSalario(2500);
console.log(`Nome: ${a1.getNome()}, CPF: ${a1.getCpf()}`);
console.log(`Salário: ${a1.getSalario()}`);
console.log(`Vencimento: ${a1.vencimento()}`);

const a2 = new Comissionado(`Skillet`,`8989808908080`,1999,9.90);
a2.setNome(`Avenged Sevenfold`);
a2.setCpf(`6378376373787`);
a2.setTotalVendas(36470);
a2.setTaxaComissao(5.89);
console.log(`Nome: ${a2.getNome()},CPF: ${a2.getCpf()}`);
console.log(`Comissão: ${a2.getTaxaComissao()},Total De Vendas: ${a2.getTotalVendas()}`);
console.log(`Vencimento: ${a2.vencimento()}`);

const a3 = new Horista(`Maria`,`897798989808`,1282,29);
a3.setNome(`Joao`);
a3.setCpf(`298739229`);
a3.setValorHoras(360);
a3.setHorasTrabalhadas(68);
console.log(`Nome: ${a3.getNome()},CPF: ${a3.getCpf()}`);
console.log(`Valor Horas: ${a3.getValorHoras()},Horas trabalhadas: ${a3.getHorasTrabalhadas()}`);
console.log(`Vencimento: ${a3.vencimento()}`);

