/* import { Negociacao } from "./models/negociacao.js"

const negociacao = new Negociacao(new Date(), 10, 100)
console.log(negociacao)
//negociacao.quantidade = 1000 //podemos ver que não altera a quantidade que passamos como parametro, mas ele adiciona uma outra propriedade com o mesmo nome
//console.log(negociacao)
console.log(negociacao.data + ' Data') //para podermos acessar as variaveis que estão definidas privadas '#', precisamos dos getters, e utilizamos no console.log . e o nome do getter pra acessar
//porem um getter ele só pode ser lido, não podemos atribuir nada a ele.

console.log(negociacao.volume + ' Volume')
*/

import { NegociacaoController } from "./controllers/negociacao-controller.js"; //é TS, porem temos que importar como JS no final.
import { NegociacoesView } from "./views/negociacoes-view.js";


const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => { 
        event.preventDefault(); //previnir que ela não vai atualizar assim que o submit for executado
        controller.adiciona();
    });
} else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe.');
}
