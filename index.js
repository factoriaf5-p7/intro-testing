/* This file is the "original" function without testing */

export const calculator = (a, b, operator) => {

    // Error if don't receive a parameter (undefined)
    if (a === undefined || b === undefined){
      return ('Parameters should be defined.');

    // Error if parameter is not a number
    } else if (typeof a !== 'number' || typeof b !== 'number') {
     return ('Parameters should be a numbers'); 
    } 

    switch(operator){
        case 'plus':
            return a+b;

        case 'minus':
            return a-b;

        case 'multiply':
            return a*b;

        case 'divide':
            return a/b;
        
        case 'modulo':
            return a%b;

    }
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
