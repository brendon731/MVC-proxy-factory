class MensagemView extends View{
    // #elemento
    constructor(element){
        super(element)
    }

    template(model){
        return model.texto ?`<p class="alert alert-info">${model.texto}</p>`:"<p></p>"
    }
    update(model){
        this.elemento.innerHTML = this.template(model)

        setTimeout(() => {
            this.elemento.innerHTML = this.template("")
        },3000);


    }

    
}