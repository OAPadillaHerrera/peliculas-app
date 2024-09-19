

/*
Este archivo define la clase `CarritoCompra´, que simula el
funcionamiento de un carrito de compras. La clase incluye métodos para 
agregar productos, calcular el total de la compra y aplicar descuentos.
 
También se han implementado pruebas unitarias utilizando Jest para asegurar 
la correcta funcionalidad de los métodos en diversos escenarios.
 
Métodos principales: agregarProducto, calcularTotal y aplicarDescuento.
*/

const CarritoCompra = require ("../index");

/* Consignas, HOMEWORK:
Desarrolla una clase en JavaScript llamada CarritoCompra que represente un carrito de compras. La clase debe tener los siguientes métodos:

1. constructor(): Inicializa el carrito como un array vacío.
2. agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.
3. calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.
4. aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.

Escribir pruebas unitarias utilizando Jest para asegurarte de que la clase CarritoCompra funciona correctamente en diferentes escenarios.
*/

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

        const miCarrito = new CarritoCompra();
        expect (miCarrito.carrito.length).toBe(0); 

    });

});

/*-----------------------------------------------------*/


describe ("El método 'agregarProducto'", () => {

    it ("Debe pushear uno o varios objetos", () => {

        const miCarrito = new CarritoCompra ();

        miCarrito.agregarProducto (

            { producto: "TOMATE", precio: 500},
            { producto: "CEBOLLA", precio: 400}

        );

        expect (miCarrito.carrito.length).toBeGreaterThanOrEqual (1);

    });

});

describe ("El método 'calcularTotal'", () => {

    it ("Debe calcular el valor total de todos los productos", () => {

        const miCarrito = new CarritoCompra ();

        miCarrito.agregarProducto (

            { producto: "TOMATE", precio: 500},
            { producto: "ZANAHORIA", precio: 700}

        );

        const total = miCarrito.calcularTotal ();
        expect (total).toBe (1200); 

    });

    it ("Debe calcular el valor total cuando hay un solo producto", () => {

        const miCarrito = new CarritoCompra ();

        miCarrito.agregarProducto ({ producto: "TOMATE", precio: 500 });

        const total = miCarrito.calcularTotal ();
        expect (total).toBe (500); 

    });

});

describe ("El método 'aplicarDescuento'", () => {

    it ("Debe descontar un porcentaje del valor total de la compra", () => {
        const miCarrito = new CarritoCompra ();

        miCarrito.agregarProducto (

            { producto: "TOMATE", precio: 500},
            { producto: "ZANAHORIA", precio: 700}

        );

        const totalDescuento = miCarrito.aplicarDescuento (20);
        expect (totalDescuento).toBe (960); 

    });

    it ("No debe descontar nada del valor total de la compra", () => {

        const miCarrito = new CarritoCompra ();

        miCarrito.agregarProducto (

            { producto: "TOMATE", precio: 500},
            { producto: "ZANAHORIA", precio: 700}

        );

        const totalDescuento = miCarrito.aplicarDescuento(0);
        expect (totalDescuento).toBe (1200); 
        
    });

});


