// IMPORT LIBRIRIES
import test from 'node:test';
import assert from 'node:assert/strict';
// IMPORT FUNCTION TO TEST
import { calculator } from './index.js';

// Test ADDITION
test('The function should return 6 if receive 4 and 2', () => {
    const result = calculator (4,2,'plus');
    assert.strictEqual(result,6)
})

// Test SUBTRACTION
test('The function should return 2 if receive 4 and 2', () => {
    const result = calculator (4,2,'minus');
    assert.strictEqual(result,2);
})

//Test MULTIPLICATION
test('The function should return 25 if receive 4 and 2', () => {
    const result = calculator (5,5,'multiply');
    assert.strictEqual(result,25);
})

//Test DIVISION
test('The function should return 3 if receive 6 and 2', () => {
    const result = calculator (6,2,'divide');
    assert.strictEqual(result,3);
})

//Test MODULE
test('The function should return 2 if receive 12 and 5', () => {
    const result = calculator (12,5,'modulo');
    assert.strictEqual(result,2);
})
