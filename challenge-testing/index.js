

// Define la clase CarritoCompra.
class CarritoCompra {

    // Construye la clase, e inicializa un array vacío para el carrito.
    constructor () {

        this.carrito = [];  // Array para almacenar los productos.

    }

    // Método para agregar productos al carrito.
    agregarProducto (...producto) {

        // Agrega cada producto recibido como argumento al array 'carrito'.
        this.carrito.push (...producto);
        return this.carrito;  // Devuelve el contenido actualizado del carrito.

    }  

    // Método para calcular el total del precio de los productos en el carrito.
    calcularTotal () {

        let total = 0;  // Variable para almacenar el total.

        // Itera sobre todos los productos en el carrito.
        for (let i = 0; i < this.carrito.length; i++) {

            // Suma el precio de cada producto al total.
            total += this.carrito [i].precio;

        }

        return total;  // Devuelve el total calculado.

    }

    // Método para aplicar un descuento al total del carrito.
    aplicarDescuento (porcentaje) {

        // Calcula el total con descuento restando un porcentaje del total.
        let descuento = this.calcularTotal () * (1 - (porcentaje / 100));
        return descuento;  // Devuelve el total con el descuento aplicado.
    }

}

// Crea una instancia de la clase CarritoCompra.
const miCarrito = new CarritoCompra ();

// Agrega varios productos al carrito.
miCarrito.agregarProducto (

    { producto: "TOMATE", precio: 500 }, 
    { producto: "CEBOLLA", precio: 400 }, 
    { producto: "AJO", precio: 300 }

);

// Comentar o descomentar la siguiente línea para ver el total con un descuento aplicado
// console.log(miCarrito.aplicarDescuento(10));

// Exporta la clase para poder usarla en otros módulos
module.exports = CarritoCompra;



