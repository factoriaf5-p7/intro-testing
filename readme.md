# Testing

## Introducción

### TESTING
La automatización de las pruebas es lo que se denomina **testing**. Cuando el test lo realizamos de una clase, un método o una función, estamos hablando de un **test unitario**. Sirven para modelar el comportamiento de esa unidad y son una red de seguridad que permite hacer cambios posteriores con mayor conﬁanza.

### PATRÓN AAA
La realización del test debe seguir el patrón de **AAA** (Arrange, Act, Assert):
- A --> **Arrange** ó Ajustar: configura el código, crea el escenario que el test pretende simular, de manera que el **test quede aislado** de todas sus dependencias. Esto podría incluir crear instancias de la unidad bajo el constructor del test, agregar registros de base de datos, mocks y stubs de objetos y cualquier otro código necesario.

- A --> **Act** ó Actuar: Ejecuta la unidad en test. Normalmente 1 línea de código.

- A --> **Assert** ó Afirmar: Comprobar que el valor recibido satisface las expectativas. Normalmente 1 línea de código

### TDD
Los tests unitarios facilitan la programación **TDD** (Test driven development). TDD es una técnica de la metodología agile **XP** (Extreme Programming) que consiste en escribir los tests primero y luego el código. Promueve la simplicidad y la confianza de saber que nuestro código está haciendo lo que esperamos.

**Razones para utilizar TDD:**

- Ayuda a diseñar tu solución
- Implementar el mínimo código que satisface las necesidades
- Crear una red de seguridad para futuros cambios (refactoring)
- Código como documentación
- Descubrir cómo implementar una solución compleja construyéndola paso a paso

**Filosofía y diseño de TDD:**

- Cada línea de código de producción:
  - Debe ser entendible
  - Tendrá que ser mantenida
  - Es una fuente de posibles defectos
- Las soluciones simples requieren menos código
- Un diseño simple tiende a tener una mayor calidad software:
  - YAGNI (You Aren’t Going To Need It)
  - KISS (Keep It Simple, Stupid)
  - DRY (Don’t Repeat Yourself)

**Ciclo de TDD:**

1. **ROJO**

Primero escribimos un test que falla.

Falla ≠ No compila

Tenemos que ver que el test falla en rojo por tanto el código tiene que compilar SIN lógica

2. **VERDE**

Después escribimos el código que va hacer que nuestro test pase, esté en verde!
Siempre con el menor cambio posible para que el test pase. Nada más.

3. **REFACTOR**
Con los test en verde, podemos pasar a refactorizar nuestro código. Busca maneras de
mejorar el código para que se entienda mejor, reducir duplicaciones, que tenga mejor
performance etc.

`Recuerda!` Los tests también se pueden refactorizar en esta fase SIEMPRE Y CUANDO
no refactorizes test y código a la vez.
Si cambias el código, no toques los tests como estaban, si cambias los tests, no toques el
código.

*¡Recuerda hacer commit!*

![](https://i.imgur.com/RloPSdV.png)

## Objetivo

Aprender hacer tests de funciones javascript
Aprender los tipos de tests
Aprender de leer documentación
Aplicar Node js test runner

## Iteraciones

### Iteración 0
Investiga el módulo test runner de Node.js. Realiza una prueba de cómo funciona, aprende a distinguir las 3As de un test.

### Iteración 1
Plantea el test para probar una función que realice la suma de dos números.

### Iteración 2
Añade todos los tests para que la función de suma contemple casos de error; alguno de los parámetros no es un número, alguno de los parámetros no está informado,...

### Iteración 3
Crea tests para funciones:
- Restar (-) entre dos números
- Multiplicación (*) de dos números
- División (/) entre dos números
- Modúlo (%) investiga que es este operador

### Iteración 4
Crea los tests para una función que sirva como calculadora a la que se pasen dos números y la operación a realizar (suma, multiplicación, división o módulo)

Genera un repositorio de github que contenga todos los tests.

## Modalidad de trabajo

Trabajaréis en modalidad de [Pair Programming](https://en.wikipedia.org/wiki/Pair_programming):

> One of the programmers, the **driver**, has control of the keyboard/mouse and actively implements the program. The other programmer, the **navigator (or observer)**, continuously observes the work of the driver to identify tactical (syntactic, spelling, etc.) defects, and also thinks strategically about the direction of the work.


Actividad de 2 horas de duración.

## Entrega

- Haz un fork del repositorio
- Sube todos los tests a ****tu repositorio.****
- Realiza un pull-request cuando hayas terminado.