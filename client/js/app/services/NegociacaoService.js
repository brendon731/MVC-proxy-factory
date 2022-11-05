
class NegociacaoService{
    constructor(){
        this._service = new HttpService()
    }

    obterNegociacoesDaRetrasada(cb){
        return new Promise((resolve, reject)=>{

            this._service.get("negociacoes/retrasada")
            .then(negociacoes=>{
                resolve(negociacoes.map(obj=>new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)))
            })
            .catch(erro=>{
                console.log(erro)
                reject("não foi possivel obter as negociações da semana")
            
            })
           
        })
    }

    obterNegociacoesDaAnterior(cb){
        return new Promise((resolve, reject)=>{

            this._service.get("negociacoes/anterior")
            .then(negociacoes=>{
                resolve(negociacoes.map(obj=>new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)))
            })
            .catch(erro=>{
                console.log(erro)
                reject("não foi possivel obter as negociações da semana")
            
            })
           
        })
    }
    obterNegociacoesDaSemana(cb){
        return new Promise((resolve, reject)=>{

            this._service.get("negociacoes/semana")
            .then(negociacoes=>{
                resolve(negociacoes.map(obj=>new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)))
            })
            .catch(erro=>{
                console.log(erro)
                reject("não foi possivel obter as negociações da semana")
            
            })
           
        })
    }
}