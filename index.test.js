import test from 'node:test';
import assert from 'node:assert/strict';
//hacer el testing de una función que sume dos números
import {calculadora} from './index.js';


test('la función calculadora debe devolver 5 cuando pase 3 y 2',()=>{
    const resultado = calculadora (3,2,'suma');

    assert.strictEqual(resultado, 5);
})

test('la función calculadora debe devolver 7 cuando pase 4 y 3',()=>{

    const resultado = calculadora (4,3,'suma');

    assert.strictEqual(resultado, 7);
})

test('la función calculadora debe devolver el mensaje "solo puede calculadora números", cuando uno de los parámetros no es un número',()=>{
    const resultado = calculadora('hola',3,'suma')
    assert.strictEqual(resultado, "solo puede calculadora números")
})

test('calculadora debe devolver 4 cuando el operador es "resta" y los valores son 7 y 3',()=>{
    const resultado = calculadora(7,3,'resta');
    assert.strictEqual(resultado, 4);
})

test('calculadora debe devolver 12 cuando el operador es "multiplica" y los valores 4 y 3',()=>{
    const resultado = calculadora(4,3,'multiplica');
    assert.strictEqual(resultado, 12);
} )

test('calculadora debe devolver 3 cuando el operador es "divide" y los valores 9 y 3',()=>{
    const resultado = calculadora(9,3,'divide');
    assert.strictEqual(resultado, 3);
} )