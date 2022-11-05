class View{
    
    constructor(element){
        this.elemento = element
    }

    template(model){
        throw new Error("O metodo template deve ser implementado!")
    }

    update(model){
        this.elemento.innerHTML = this.template(model)

    }

    
}