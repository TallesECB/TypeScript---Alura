import { DiasDaSemana } from "../enums/dias-da-semana.js"
import { Negociacao } from "../models/negociacao.js"
import { Negociacoes } from "../models/negociacoes.js"
import { MensagemView } from "../views/mensagem-view.js"
import { NegociacoesView } from "../views/negociacoes-view.js"

export class NegociacaoController {
    private inputData: HTMLInputElement 
    private inputQuantidade: HTMLInputElement 
    private inputValor: HTMLInputElement 
    private negociacoes = new Negociacoes()
    private negociacoesView = new NegociacoesView('#negociacoesView')
    private mensagemView = new MensagemView('#mensagemView')

    constructor() {
        this.inputData = document.querySelector('#data') as HTMLInputElement //estamos convertendo o tipo que eu garanto, que eu assumo que n vai dar problema, para o tipo q eu coloquei ali, utilizando o as
        this.inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade')  //ou fazer assim
        this.inputValor = document.querySelector('#valor') as HTMLInputElement
        this.negociacoesView.update(this.negociacoes)
    }

    public adiciona(): void { //dentro da APP nos vamos chamar apenas o adiciona, o resto é chamado dentro do metodo adiciona, ent os outros tornamos private e o adiciona public
        //const negociacaoTemp = new Negociacao(null, 0, 0 ) n é necessário instanciarmos pois estamos utilizando o static, ai conseguimos acessar direto chamando o nome da classe cm a função
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        )
        //const negociacao = this.criaNegociacao() removida a chamada da função criaNegociacao, pois foi criada na modal de negociacao
        if(!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas')
            return
        }
        //0 é domingo, 6 é sabado, 1 segunda, 2 terça e assim por diante, sexta - 5
        this.negociacoes.adiciona(negociacao)
        this.limparFormulario()
        this.atualizaView()
        negociacao.data.setDate(12) // com a programação defensiva, mesmo utilizando os setDate, a data não vai mais ser alterada.
        //utilizar o negociacao.data = 10, n funciona porem se utilizar uma função negociacao.data.setDate(12) ele iria atribuir o valor, para podermos nos defender disso, 
        //precisamos de uma programação defensiva para evitar algumas funções de atribuições que conseguem furar o nosso somente leitura do TS, deixar ela imutavel

    }

    private ehDiaUtil (data: Date) {
        return data.getDay () > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO //estamos utilizando o enum dos dias, para a realização do IF
    }

    /* //removido e criado na propria modal de negociacao
    private criaNegociacao(): Negociacao { //estamos tipando e informando qual o tipo do retorno, se fosse um retorno vazio, seria void se fosse um retorno qualquer seria any
        const exp = /-/g
        const date = new Date(this.inputData.value.replace(exp, ','))
        const quantidade = parseInt(this.inputQuantidade.value)
        const valor = parseFloat(this.inputValor.value)

        return new Negociacao(date, quantidade, valor)
    }
    */

    private limparFormulario(): void {
        this.inputData.value = ''
        this.inputQuantidade.value = ''
        this.inputValor.value = ''

        this.inputData.focus()
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes)
        this.mensagemView.update('Negociação adicionada com sucesso')
    }
}