

/* 
This test file validates the functionality of the `CarritoCompra` class using the Jest testing framework.

The tests cover the following aspects:
- Class existence and initial state of the cart.
- Functionality of `agregarProducto ()` for adding one or multiple products.
- Correct calculation of the total price with `calcularTotal ()`.
- Application of discounts through `aplicarDescuento ()` with various percentages.

Each test is designed to ensure accurate behavior across different scenarios, supporting reliable 
unit testing practices and reinforcing code stability during development.

This file is intended for educational and practice purposes in testing JavaScript classes.
*/

/* Consigna, HOMEWORK:
Escribir pruebas unitarias utilizando Jest para asegurarte de que la clase CarritoCompra funciona correctamente en diferentes escenarios.
*/

const CarritoCompra = require ("../index");

describe ("Una prueba de test que pasa siempre", () => {

    it ("Este test debe pasar siempre", () => {

        expect (true).toBe (true); 

    });

});

/*-----------------------------------------------------*/

describe ("La clase 'CarritoCompra'", () => {

    it ("Debe estar definida", () => {

        expect (CarritoCompra).toBeDefined (); 

    });

    it ("El tamaño inicial del array 'carrito' debe ser cero", () => {

        const miCarrito = new CarritoCompra ();
        expect (miCarrito.carrito.length).toBe (0); 

    });

});

/*-----------------------------------------------------*/

describe ("El método 'agregarProducto'", () => {

    it ("Debe pushear uno o varios objetos", () => {

        const miCarrito = new CarritoCompra ();

        miCarrito.agregarProducto (

            { producto: "Tomate", precio: 500},
            { producto: "Cebolla", precio: 400}

        );

        expect (miCarrito.carrito.length).toBeGreaterThanOrEqual (1);

    });

});

/*-----------------------------------------------------*/

describe ("El método 'calcularTotal'", () => {

    it ("Debe calcular el valor total de todos los productos", () => {

        const miCarrito = new CarritoCompra ();

        miCarrito.agregarProducto (

            { producto: "Tomate", precio: 500},
            { producto: "Zanahoria", precio: 700}

        );

        const total = miCarrito.calcularTotal ();
        expect (total).toBe (1200); 

    });

    it ("Debe calcular el valor total cuando hay un solo producto", () => {

        const miCarrito = new CarritoCompra ();

        miCarrito.agregarProducto ({ producto: "Tomate", precio: 500 });

        const total = miCarrito.calcularTotal ();
        expect (total).toBe (500); 

    });

});

/*-----------------------------------------------------*/

describe ("El método 'aplicarDescuento'", () => {

    it ("Debe descontar un porcentaje del valor total de la compra", () => {
        const miCarrito = new CarritoCompra ();

        miCarrito.agregarProducto (

            { producto: "Tomate", precio: 500},
            { producto: "Zanahoria", precio: 700}

        );

        const totalDescuento = miCarrito.aplicarDescuento (20);
        expect (totalDescuento).toBe (960); 

    });

    it ("No debe descontar nada del valor total de la compra", () => {

        const miCarrito = new CarritoCompra ();

        miCarrito.agregarProducto (

            { producto: "Tomate", precio: 500},
            { producto: "Zanahoria", precio: 700}

        );

        const totalDescuento = miCarrito.aplicarDescuento (0);
        expect (totalDescuento).toBe (1200); 
        
    });

});


