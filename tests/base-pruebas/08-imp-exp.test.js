import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"

describe('Test Data heroes', () => {

    test('Test getHeroById', () => {
        const idHeroe = 2;
        const heroe = getHeroeById(idHeroe);
        expect( heroe ).toEqual({
            id: 2,
            name: 'Spiderman',
            owner: 'Marvel'
        });
    })

    test('Test getHeroById return undefined si no exister el id', () => {
        const idHeroe = 100;
        const heroe = getHeroeById(idHeroe);
        expect( heroe ).toEqual(undefined);
    })

    test('Test getHeroesByOwner Marvel ', () => {
        const owner = 'Marvel';
        const {heroe} = getHeroesByOwner(owner);
        expect(heroe.length).toBe(2);
    })

    test('Test getHeroesByOwner DC ', () => {
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);
        expect(heroe.length).toBe(3);
    })
    
    
})
