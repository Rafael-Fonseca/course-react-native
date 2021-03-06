class Lancamento{
    constructor(nome='Gen', valor=0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(elemento => this.lancamentos.push(elemento))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(elemento => {
            valorConsolidado += elemento.valor            
        })
        return valorConsolidado
    }

}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2021)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())
