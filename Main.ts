import Producto from "./Producto";
import Electrodomestico from "./Electrodomestico";
import EquipoInformatico from "./EquipoInformatico";
import Inventario from "./Inventario";

const p1 = new Producto("Iphone 18", 1800, "Apple");
const p2 = new Producto("Iphone 18 pro max", 2200, "Apple");
const p3 = new Producto("Samsung Galaxy S30", 1500, "Samsung");

const e1 = new Electrodomestico("Lavadora", 800, "LG", "A++", 2);
const e2 = new Electrodomestico("Frigorífico", 1200, "Samsung", "A+", 3);
const e3 = new Electrodomestico("Microondas", 300, "Panasonic", "B", 1);

const ei1 = new EquipoInformatico("Portátil", 1500, "Dell", "A+", 2, 16, "Intel i7");
const ei2 = new EquipoInformatico("PC de sobremesa", 2000, "HP", "A++", 3, 32, "AMD Ryzen 9");
const ei3 = new EquipoInformatico("Tablet", 600, "Apple", "A+", 1, 8, "Apple M1");

const inventario = new Inventario();
// Agregar productos al inventario
inventario.agregar(p1);
inventario.agregar(p2);
inventario.agregar(p3);
inventario.agregar(e1);
inventario.agregar(e2);
inventario.agregar(e3);
inventario.agregar(ei1);
inventario.agregar(ei2);
inventario.agregar(ei3);

// Mostrar productos en el inventario
inventario.mostrarProductos();

// Calcular y mostrar el valor total del inventario
const valorTotal = inventario.calcularValorTotal();
console.log(`Valor total del inventario: $${valorTotal.toFixed(2)}`);
console.log("--------------------------------------------------");

// Aplicar descuentos y mostrar precios después del descuento
p1.aplicarDescuento([p1, p2, p3], 15);
console.log(`Precio de ${p1.getNombre()} después del descuento: $${p1.getPrecio().toFixed(2)}`);

e1.aplicarDescuento([e1, e2, e3], 20);
console.log(`Precio de ${e1.getNombre()} después del descuento: $${e1.getPrecio().toFixed(2)}`);
console.log(`Precio de ${e2.getNombre()} después del descuento: $${e2.getPrecio().toFixed(2)}`);
console.log(`Precio de ${e3.getNombre()} después del descuento: $${e3.getPrecio().toFixed(2)}`);

ei3.aplicarDescuento([ei1, ei2, ei3], 10);
console.log(`Precio de ${ei1.getNombre()} después del descuento: $${ei1.getPrecio().toFixed(2)}`);
console.log(`Precio de ${ei2.getNombre()} después del descuento: $${ei2.getPrecio().toFixed(2)}`);
console.log(`Precio de ${ei3.getNombre()} después del descuento: $${ei3.getPrecio().toFixed(2)}`);