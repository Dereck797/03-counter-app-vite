import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Pruebas en 07-deses-arr', () => {

    test('Debe retornar un string y un número', () => {

        // El método toBe también se encarga de validar que el tipo de dato sea el mismo
        const [letters, numbers] = retornaArreglo();
        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);


        // Se puede evaluar con el typeof
        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');


        expect( letters ).toEqual(expect.any(String));
    })
    
    

})
