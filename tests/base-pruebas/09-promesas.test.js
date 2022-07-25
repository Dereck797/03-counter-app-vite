import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";


describe('Pruebas en promesas', () => {


    // El método done nos sirve para poder ejecutar pruebas con métodos Asincronos
    // Nos ayuda a decirle al test que espere hasta que la prueba termine 
    test('getHeroeByIdAsync debe  de retornar heroe', (done) => {

        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {

                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                done();
            });
    });

    test('getHeroeByIdAsync debe obtener error si el heroe no existe', (done) => {

        const id = 100;
        getHeroeByIdAsync(id)
            .then(error => {
                expect( hero ).toBeFalsy();
            })
            .catch(error => {
                expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
                done();
            });
    });


});