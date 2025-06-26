

/* 
This JavaScript module defines the `CarritoCompra` class, which provides basic 
shopping cart functionality for managing products and calculating totals.

Main features include:
- `agregarProducto (...producto)`: Adds one or multiple product objects (with name and price) to the cart.
- `calcularTotal ()`: Calculates the total price of all products currently in the cart.
- `aplicarDescuento (porcentaje)`: Applies a percentage-based discount to the total and returns the reduced amount.

This class is intended for testing purposes.
*/

/* Consigna, HOMEWORK:
Desarrolla una clase en JavaScript llamada CarritoCompra que represente un carrito de compras. La clase debe tener los siguientes métodos:

1. constructor (): Inicializa el carrito como un array vacío.
2. agregarProducto (producto): Recibe un objeto representando un producto y lo agrega al carrito.
3. calcularTotal (): Calcula el total de la compra sumando los precios de todos los productos en el carrito.
4. aplicarDescuento (porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.
*/

class CarritoCompra {

    constructor () {

        this.carrito = [];  

    }

    agregarProducto (...producto) {

        this.carrito.push (...producto);
        return this.carrito;  

    }  

    calcularTotal () {

        let total = 0;  

        for (let i = 0; i < this.carrito.length; i++) {

            total += this.carrito [i].precio;

        }

        return total;  

    }

    aplicarDescuento (porcentaje) {

        let descuento = this.calcularTotal () * (1 - (porcentaje / 100));
        return descuento;  

    }

}

module.exports = CarritoCompra;



