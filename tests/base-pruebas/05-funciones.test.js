import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas ', () => {
  test(' getUser debe retornar un objeto ', () => {
    const testUser = {
        uid: 'ABC123',
        username: 'El_Papi1502',
    };

    const user = getUser();
    // El método toBe solamente funciona para comparar string, para comparar objetos
    // expect( testUser ).toBe( user );
    // es necesario utilizar la función toEquals
    expect( testUser ).toEqual( user );

  })

  test('getUsuarioActivo debe retornar un objeto ', () => {
    const name = 'Dereck';
    const {username} = getUsuarioActivo(name);
    expect(username).toEqual(name);
  })
  
  
})
