import { View } from './view.js'

export class MensagemView extends View<string> { //utilizando o <string> para mandar o tipo pro pai View
    
    protected template(model: string): string {
        return `
            <p class="alert alert-info">${model}</p>
        `
    }

    /*
    update(model: string): void { //estamos repetindo o mesmo codigo, na mensagem-view e na negociacoes-view
        const template = this.template(model)
        this.elemento.innerHTML = template
    }
    */
}