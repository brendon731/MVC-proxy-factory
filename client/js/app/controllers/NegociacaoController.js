
class NegociacaoController{
    #inputData
    #inputQuantidade
    #inputValor
    #elemento
    #listaNegociacoes
    #negociacoesView
    #mensagem
    #mensagemView

    constructor(){
        this._ordermAtual = ""
        let $ = document.querySelector.bind(document)

        this._inputData = $("#data")
        this._inputQuantidade = $("#quantidade")
        this._inputValor = $("#valor")
        this._elemento = $("#tabelaDeNegociacoes")

        this._negociacoesView = new NegociacoesView(this._elemento)

        this._listaNegociacoes = ProxyFactory.create(new ListaNegociacao(), "", model=>
            this._negociacoesView.update(model)

        )

        this._mensagemView = new MensagemView($("#mensagemView"))
        
        this._mensagem = ProxyFactory.create(new Mensagem(), ["texto"], model=>
            this._mensagemView.update(model)
        )
        this._negociacoesView.update(this._listaNegociacoes)
        
    }

    adiciona(evt){
        evt.preventDefault()
        this._listaNegociacoes.adiciona(this._criaNegociacao())
        this._mensagem.texto = "negociação adicionada com sucesso"

        this._limpaFormulario()
    }
    importaNegociacao(){
        let service = new NegociacaoService()

        Promise.all([
            service.obterNegociacoesDaRetrasada(),
            service.obterNegociacoesDaAnterior(),
            service.obterNegociacoesDaSemana()
        ])
        .then(negociacoes=>{
            negociacoes.reduce((flat, acc)=>flat.concat(acc),[])
            .forEach(negociacao=>this._listaNegociacoes.adiciona(negociacao))
            this._mensagem.texto = "negociações adicionadas com sucesso"

        })
        .catch(erro=>{
            this._mensagem.texto = erro
        })

        // service.obterNegociacoesDaSemana((err, negociacoes)=>{
        //     if(err){
        //         this._mensagem.texto = err
        //         return
        //     }
        //     negociacoes.forEach(negociacao=>this._listaNegociacoes.adiciona(negociacao))
        //     this._mensagem.texto = "negociações adicionadas com sucesso"

        // })
         
    }
    ordena(coluna){
        if(this._ordemAtual === coluna){
            this._listaNegociacoes.inverteOrdem()
        }else{
            this._listaNegociacoes.ordena(coluna)
        }
        this._ordemAtual = coluna

    }
    apaga(){
        this._listaNegociacoes.esvazia()
        this._mensagem.texto = "negociação apagadas com sucesso"
    }
    _criaNegociacao(){
        return (
            new Negociacao(
                DateHelper.textoParaData(this._inputData.value),
                this._inputQuantidade.value,
                this._inputValor.value
            )
        )
    }
    _limpaFormulario(){
        this._inputData.value = ""
        this._inputQuantidade.value = 1
        this._inputValor.value = 0.0
        this._inputData.focus()
    }
}