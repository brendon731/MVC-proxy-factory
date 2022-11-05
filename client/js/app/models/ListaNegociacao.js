class ListaNegociacao{
    #negociacao
    #armadilha
    constructor(){
        this._negociacoes = []
    }
    adiciona(negociacao){
        
        this._negociacoes = [...this._negociacoes, negociacao]

    }
    ordena(coluna){
        return [...this._negociacoes.sort((a, b)=>a[coluna] - b[coluna])]
    }
    
    inverteOrdem(){
        console.log("inverteu")
        return [...this._negociacoes.reverse()]

    }
    esvazia(){
        this._negociacoes = []
    }
    get negociacoes(){
        return [...this._negociacoes]
    }

}