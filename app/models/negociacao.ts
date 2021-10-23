export class Negociacao { //atributos privados que só pode ser alterado dentro do construtor / classe

    constructor (
        private _data: Date, //programação defensiva para garantir que a data n vai ser modificada pelo setDate
        public readonly quantidade: number,
        public readonly valor: number // a gente tá dizendo q eles vão ser publicos, porem vai ser só leitura, então não vai ter como altera eles
    ) {}
    
    get volume(): number {
        return this.quantidade * this.valor
    }

    //programação defensiva para garantir que a data n vai ser modificada pelo setDate
    get data(): Date {
        const data = new Date(this._data.getTime())
        return data
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g
        const date = new Date(dataString.replace(exp, ','))
        const quantidade = parseInt(quantidadeString)
        const valor = parseFloat(valorString)

        return new Negociacao(date, quantidade, valor)
    }
   
    //melhorando e simplificando o codigo
    /* 
    constructor ( //no typescript, se defini o valor da variavel, se faz dessa forma ': após o nome dela e dps o tipo
        private _data: Date, 
        private  _quantidade: number, 
        private _valor: number
    ) { } 


    get data(): Date{
        return this._data
    }

    get quantidade(): number {
        return this._quantidade
    }

    get valor(): number {
        return this._valor
    }

    get volume(): number { //estamos tipando e informando qual o tipo do retorno, se fosse um retorno vazio, seria void se fosse um retorno qualquer seria any
        return this._quantidade * this._valor
    }
    */
}

