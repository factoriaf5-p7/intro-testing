const assert = require('chai').assert;
const { sum, subtract, multiply, divide, modulo, calculator } = require('./funciones.js');

describe('Función de suma', () => {
  it('debería sumar dos números correctamente', () => {
    const result = sum(2, 3);
    assert.equal(result, 5);
  });

  it('debería lanzar un error si alguno de los parámetros no es un número', () => {
    assert.throw(() => sum(2, '3'), TypeError);
  });

  it('debería lanzar un error si alguno de los parámetros no está informado', () => {
    assert.throw(() => sum(2), TypeError);
    assert.throw(() => sum(), TypeError);
  });
});

describe('Funciones matemáticas', () => {
  it('debería restar dos números correctamente', () => {
    const result = subtract(5, 3);
    assert.equal(result, 2);
  });

  it('debería multiplicar dos números correctamente', () => {
    const result = multiply(4, 3);
    assert.equal(result, 12);
  });

  it('debería dividir dos números correctamente', () => {
    const result = divide(10, 2);
    assert.equal(result, 5);
  });

  it('debería lanzar un error si intenta dividir por cero', () => {
    assert.throw(() => divide(10, 0), Error);
  });

  it('debería calcular el módulo de dos números correctamente', () => {
    const result = modulo(10, 3);
    assert.equal(result, 1);
  });
});

describe('Calculadora', () => {
  it('debería sumar dos números correctamente', () => {
    const result = calculator(5, 3, 'sum');
    assert.equal(result, 8);
  });

  it('debería restar dos números correctamente', () => {
    const result = calculator(10, 4, 'subtract');
    assert.equal(result, 6);
  });

  it('debería multiplicar dos números correctamente', () => {
    const result = calculator(7, 2, 'multiply');
    assert.equal(result, 14);
  });

  it('debería dividir dos números correctamente', () => {
    const result = calculator(15, 3, 'divide');
    assert.equal(result, 5);
  });

  it('debería lanzar un error si intenta dividir por cero', () => {
    assert.throw(() => calculator(10, 0, 'divide'), Error);
  });

  it('debería calcular el módulo de dos números correctamente', () => {
    const result = calculator(10, 3, 'modulo');
    assert.equal(result, 1);
  });

  it('debería lanzar un error si se proporciona una operación no admitida', () => {
    assert.throw(() => calculator(5, 5, 'potato'), Error);
  });
});





