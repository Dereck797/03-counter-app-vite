describe('Pruebas en DemoComponent', () => {
    test('Esta prueba no debe fallar', () => {
        // Las pruebas debe ntener 3 partes
        // 1.inicialización
        const message1 = 'Hola Mundo';
        // 2.Estimulo
        const message2 = message1.trim();
        // 3.Acersiones o Observar el comportamiento para instalar el intelicense de jest ejecutar el siguiente comando
        // yarn add -D @types/jest
        expect(message1).toBe(message2);
    });
})


