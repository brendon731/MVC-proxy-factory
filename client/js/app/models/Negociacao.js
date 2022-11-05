class Negociacao{
    #data
    #quantidade
    #valor
    constructor(data, quantidade, valor){
        this._data = new Date(data.getTime())
        this._quantidade = quantidade
        this._valor = valor
    }

    get volume(){
        return this._quantidade * this._valor

    }
    get valor(){
        return this._valor
    }
    get quantidade(){

        return this._quantidade
    }
    get data(){

        return this._data
    }
    
}