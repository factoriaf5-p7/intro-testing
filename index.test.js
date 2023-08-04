import test from "node:test";

// Describe el grupo de pruebas
describe("Pruebas de suma", () => {
  // Prueba individual
  it("Debería sumar dos números correctamente", () => {
    // Arrange: Preparación
    const num1 = 5;
    const num2 = 10;

    // Act: Acción
    const resultado = num1 + num2;

    // Assert: Aserción
    assert.strictEqual(resultado, 15);
  });

  // Prueba adicional
  it("Debería devolver NaN si alguno de los valores no es numérico", () => {
    // Arrange: Preparación
    const num1 = 5;
    const num2 = "abc";

    // Act: Acción
    const resultado = num1 + num2;

    // Assert: Aserción
    assert.ok(isNaN(resultado));
  });
});
