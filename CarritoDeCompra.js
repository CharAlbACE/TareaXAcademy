class Producto {
constructor(nombre, precio) {
        this.nombre = nombre;
      this.precio = precio;
    }
        }
            class CarritoDeCompras {
    constructor() {
            this.montoTotal = 0;
      this.productos = [];
    }
   agreProd(producto) {
      this.productos.push(producto);
      this.montoTotal = producto.precio;
    }
  }
  
    let carrito = new CarritoDeCompras();
let pan = new Producto("pan", 12);
let pescado = new Producto("pescado", 100);
let alfombra = new Producto("alfombra", 250);
    carrito.agreProd(pescado);
    carrito.agreProd(alfombra);
    carrito.agreProd(pan);
        console.log(carrito.productos);
        console.log(carrito.montoTotal);

