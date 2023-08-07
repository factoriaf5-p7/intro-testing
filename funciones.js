function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new TypeError('Ambos parámetros deben ser números');
    }
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }
  
  function modulo(a, b) {
    return a % b;
  }
  



function calculator(a, b, operation) {
    switch (operation) {
      case 'sum':
        return a + b;
      case 'subtract':
        return a - b;
      case 'multiply':
        return a * b;
      case 'divide':
        if (b === 0) throw new Error('Cannot divide by zero');
        return a / b;
      case 'modulo':
        return a % b;
      default:
        throw new Error('Unsupported operation');
    }
  }
  

  

  module.exports = { sum, subtract, multiply, divide, modulo, calculator };