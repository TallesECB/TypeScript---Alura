import { Negociacao } from "../models/negociacao"
import { Negociacoes } from "../models/negociacoes.js"
import { View } from "./view.js"

export class NegociacoesView extends View<Negociacoes> { //utilizando o <negociacoes> para mandar o tipo pro pai View

    protected template(model: Negociacoes): string{
        return `
            <table class="table table-hover table-bordere">
                <thead> 
                    <tr>
                        <th>Data</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.lista().map(negociacao => {
                        return `
                            <tr>
                                <td>${this.formatar(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                            </tr>
                        `
                    }).join('')}
                </tbody>
            </table>
        `
    } //essa lista, vai ser um retorno array, se eu printo ele direto, posso utilizar o JOIN para converter cada modelo objeto javascript em string, vai juntar todo mundo em string e separa por espaço
    // Intl.DateTimeFormat() uma classe com varios metodos estaticos, para podermos formatar nossa data

    private formatar(data: Date): string { //deixando como private, para ser acessado apenas pela propria classe, nem as filhas dele podem acessar, dessa forma na controller o desenvolvedor não vai poder ver este metodo
        return new Intl.DateTimeFormat().format(data)
    }
}