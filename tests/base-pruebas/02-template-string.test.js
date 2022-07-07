import { getSaludo } from '../../src/base-pruebas/02-template-string'
// Es necesario instalar las dependencias de Babel para las últimas versiones de JS
describe('Pruebas en 02-Template-string', () => {
  test('getSaludo debe de retornar hola Dereck', () => {
    const name = 'Dereck';
    const message = getSaludo(name);
    expect( message ).toBe(`Hola ${name}`);

  })
  
})
