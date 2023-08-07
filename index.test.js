import { describe, it } from 'node:test';
import assert from "node:assert/strict";
import { suma, resta, multiplicacion, division, modulo } from "./index.js";


describe('test de funciones', () => {
    it('debe sumar dos numeros: numA(3) y numB(2) y retornar 5', () => {
        const numA= 3;
        const numB= 2;
      assert.strictEqual(suma(numA,numB), 5);
    });
  
    it('debe restar dos numeros: numA(3) y numB(2) y retornar 1', () => {
        const numA= 3;
        const numB= 2;
      assert.strictEqual(resta(numA,numB), 1);
    });
  
    it('debe multiplicar dos numeros: numA(3) y numB(2) y retornar 6', () => {
        const numA= 3;
        const numB= 2;
      assert.strictEqual(multiplicacion(numA,numB), 6);
    });

    it('debe dividir dos numeros: numA(10) y numB(2) y retornar 5', () => {
        const numA= 10;
        const numB= 2;
      assert.strictEqual(division(numA,numB), 5);
    });

    it('debe calcular modulo entre dos numeros: numA(10) y numB(2) y retornar 0', () => {
        const numA= 10;
        const numB= 2;
      assert.strictEqual(modulo(numA,numB), 0);
    });
  }); 

