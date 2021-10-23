//uma classe abstract generica, coisa linda
export abstract class View<T>{ //vamos utilizar o <t> para podermos passar o tipo para os metodos, pois estamos utilizando o string aq e como queremos um codigo generico, no negocioes-view o tipo dos metodos é 'Negociacoes' e não string como está no mensagem-view
    //com o <t> ela fica com um tipo generico, recebendo o tipo que vai ser das filhas

    protected elemento: HTMLElement //queremos que ele fique encapsulado, ent n pode ser publico, quando é protected, só eu o pai posso modificar, mas as minhas filhas podem visualizar, ter acesso a essa propriedade
    private escapar = false

    constructor(seletor: string, escapar?: boolean) { //para deixarmos o parametro escapar opcional e n precisarmos declarar o valor dele passando na negociacao controller, utilizamos o ?
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }

    public update(model: T): void {
        let template = this.template(model);
        if (this.escapar) {
            template = template
                .replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;
    
    /* { //utilizando o abstract n precisamos dessa gambiarra, só precisa definir o metodo como abstract tbm
        throw Error('Classe filha precisa implementar o método template') 
    } */ //estamos tornando ele protected para que não possa ser utilizando em outras classes, apenas o pai e as filhas, imagina se chamam ele dentro da controller o.O
    //dessa forma o desenvolvedor n vai ver este nosso metodo
}