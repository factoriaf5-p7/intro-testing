export const calculadora = (a,b,operador) =>{
    if(typeof a !=='number' || typeof b!=='number'){
        return 'solo puede calculadora números';
    }
    // if(operador === 'suma'){
    // return a+b;
    // } else if(operador === 'resta'){
    //     return a-b;
    // } else if(operador === 'multiplica'){
    //     return a*b;
    // } else if (operador === 'divide'){
    //     return a/b;
    // }

    switch(operador){
        case 'suma':
            return a+b;
        case 'resta':
            return a-b;
        case 'multiplica':
            return a*b;
        case 'divide':
            return a/b;
    }
};

