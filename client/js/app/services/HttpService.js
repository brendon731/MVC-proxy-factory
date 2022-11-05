class HttpService{

    get(url){
        return new Promise((resolve, reject)=>{

            let xhr = new XMLHttpRequest()
            xhr.open("GET", url)
            xhr.onreadystatechange = ()=>{
                if(xhr.readyState === 4){
                    if(xhr.status === 200){
                        resolve(JSON.parse(xhr.responseText))
                        // .map(obj=>new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)))
                    }else{
                        reject(xhr.responseText)
                    }
                }
            }
            xhr.send()
            
        })
    }
}