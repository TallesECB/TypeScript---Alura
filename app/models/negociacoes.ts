import { Negociacao } from "./negociacao.js";

export class Negociacoes { 
    private negociacoes: Negociacao[] = [] //Array<Negociacao> = [] mais facil usar daquela outra forma que tá implementada no codigo, que é um atalho do TS

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao)
    }

    public lista(): readonly Negociacao[] {// e para este é só colocar o readonly na frente //ReadonlyArray<Negociacao> { //array que não disponibiliza a remoção ou inclusão de novos items, ele deixa apenas como leitura
        return this.negociacoes 
    }
}
