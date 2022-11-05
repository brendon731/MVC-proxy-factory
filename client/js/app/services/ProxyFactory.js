class ProxyFactory{
    static create(objeto, props, acao){
        return new Proxy(objeto, {
            
            get:(target, prop, receiver) =>{
                const value = target[prop];
                if (value instanceof Function) {
                  return function () {
                    Reflect.apply(target[prop], target, arguments);
                    return acao(target)
                  };
                }
            return Reflect.get(target, prop, receiver);
            },

            set:(target, prop,value, receiver)=>{
                if(props.includes(prop)){
                    target[prop] = value;
                    acao(target);
                }
                return Reflect.set(target, prop,value, receiver);
                
            }
        })
    }
}