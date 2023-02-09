const NAO_LIMPAR_TELA = false
const LIMPAR_TELA  = true
export default class CalculadoraModel {
    #valor:string
    #acomulador:number
    #limparTela:boolean
    #operacao:string
    constructor(valor:string = null, acomulador:number = null, operacao:string= null,limparTela = false) {
        this.#valor = valor
        this.#acomulador = acomulador
        this.#limparTela = limparTela
        this.#operacao = operacao

 
    }
    get valor() {
        return this.#valor?.replace('.', ',') || '0'
    }

    numeroDigitado(novoValor: string) {
        return new CalculadoraModel(
            (this.#limparTela || !this.#valor) ? novoValor : this.#valor + novoValor,
            this.#acomulador,
            this.#operacao,
            NAO_LIMPAR_TELA,
        )
    }
   pontoDigitado() {
        return new CalculadoraModel(
            this.#valor?.includes('.') ? this.#valor : this.#valor + '.',
            this.#acomulador,
            this.#operacao,
            NAO_LIMPAR_TELA,
        )
    }
    AC() {
        return new CalculadoraModel(
            this.#valor = '',
            this.#acomulador,
            this.#operacao,
            NAO_LIMPAR_TELA,
        )
    }
    opercaoDigitada(proximaOperacao:string) {
        return this.calcular(proximaOperacao)
    }
    calcular(proximaOperacao:string = null) {
        const acomulador = !this.#operacao
        ?parseFloat(this.#valor):eval(`${this.#acomulador} ${this.#operacao} ${this.#valor} `)
        const valor =  !this.#operacao ? this.#valor : `${acomulador}`
        return new CalculadoraModel(valor,acomulador,proximaOperacao,proximaOperacao ? LIMPAR_TELA : NAO_LIMPAR_TELA )
    }

        
    
}
