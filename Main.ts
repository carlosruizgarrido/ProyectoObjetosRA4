
import Producto from "./Producto";
import Electrodomestico from "./Electrodomestico";
import EquipoInformatico from "./EquipoInformatico";
import Inventario from "./Inventario";

// Crear productos
const p1 = new Producto("Iphone 18", 1800, "Apple");
const p2 = new Producto("Iphone 18 pro max", 2200, "Apple");
const p3 = new Producto("Samsung Galaxy S30", 1500, "Samsung");

// Crear electrodomésticos
const e1 = new Electrodomestico("Lavadora", 800, "LG", "A++", 2);
const e2 = new Electrodomestico("Frigorífico", 1200, "Samsung", "A+", 3);
const e3 = new Electrodomestico("Microondas", 300, "Panasonic", "B", 1);

// Crear equipos informáticos
const ei1 = new EquipoInformatico("Portátil", 1500, "Dell", 1,  16, "Intel i7");
const ei2 = new EquipoInformatico("PC de sobremesa", 2000, "HP", 2, 32, "AMD Ryzen 9");
const ei3 = new EquipoInformatico("Tablet", 600, "Apple", 1,  8, "Apple M1");

// Modificar datos mediante setters
console.log("MODIFICACIÓN DE DATOS:");

try {
    p1.setNombre("Iphone 18 actualizado");
    p1.setPrecio(1750);
    p1.setMarca("Apple");

    e1.setConsumoEnergetico("A+");
    e1.setGarantia(3);

    ei1.setMemoriaRam(32);
    ei1.setProcesador("Intel i9");

    console.log("Los datos se han modificado correctamente.");
} catch (error) {
    console.log("Error al modificar los datos:", (error as Error).message);
}

// Ejemplo de control de errores con try...catch
console.log("\nCOMPROBACIÓN DE VALIDACIONES:");

try {
    p1.setPrecio(-50);
} catch (error) {
    console.log("Error capturado:", (error as Error).message);
}

try {
    e1.setConsumoEnergetico("Z");
} catch (error) {
    console.log("Error capturado:", (error as Error).message);
}

try {
    ei1.setMemoriaRam(10);
} catch (error) {
    console.log("Error capturado:", (error as Error).message);
}

// Consultar datos mediante getters
console.log("\nCONSULTA DE DATOS:");

console.log("Nombre:", p1.getNombre());
console.log("Precio:", p1.getPrecio());
console.log("Marca:", p1.getMarca());
console.log("Consumo energético:", e1.getConsumoEnergetico());
console.log("Garantía:", e1.getGarantia());
console.log("Memoria RAM:", ei1.getMemoriaRam());
console.log("Procesador:", ei1.getProcesador());

// Crear inventario
const inventario = new Inventario();

// Agregar productos al inventario
console.log("\nAGREGAR PRODUCTOS:");

inventario.agregar(p1);
inventario.agregar(p2);
inventario.agregar(p3);
inventario.agregar(e1);
inventario.agregar(e2);
inventario.agregar(e3);
inventario.agregar(ei1);
inventario.agregar(ei2);
inventario.agregar(ei3);

// Buscar un producto
console.log("\nBUSCAR PRODUCTO:");

const productoBuscado = inventario.buscar(e1);

if (productoBuscado) {
    console.log("Producto encontrado:");
    console.log(productoBuscado.informacion());
} else {
    console.log("Producto no encontrado.");
}

// Eliminar un producto
console.log("\nELIMINAR PRODUCTO:");

inventario.eliminar(p3);

// Mostrar inventario
console.log("\nINVENTARIO ACTUAL:");

inventario.mostrarProductos();

// Calcular valor total
console.log("\nVALOR TOTAL DEL INVENTARIO:");

const valorTotal = inventario.calcularValorTotal();
console.log(`Valor total: ${valorTotal.toFixed(2)}€`);

// Aplicar descuentos
console.log("\nAPLICAR DESCUENTOS:");

try {
    p1.aplicarDescuento([p1, p2, p3], 15);
    console.log("Descuento aplicado a los productos.");
} catch (error) {
    console.log("Error:", (error as Error).message);
}

try {
    e1.aplicarDescuento([e1, e2, e3], 20);
    console.log("Descuento aplicado a los electrodomésticos.");
} catch (error) {
    console.log("Error:", (error as Error).message);
}

try {
    ei3.aplicarDescuento([ei1, ei2, ei3], 10);
    console.log("Descuento aplicado a los equipos informáticos.");
} catch (error) {
    console.log("Error:", (error as Error).message);
}

// Mostrar precios después de los descuentos
console.log("\nPRECIOS ACTUALIZADOS:");

console.log(`${p1.getNombre()}: ${p1.getPrecio().toFixed(2)}€`);
console.log(`${p2.getNombre()}: ${p2.getPrecio().toFixed(2)}€`);

console.log(`${e1.getNombre()}: ${e1.getPrecio().toFixed(2)}€`);
console.log(`${e2.getNombre()}: ${e2.getPrecio().toFixed(2)}€`);
console.log(`${e3.getNombre()}: ${e3.getPrecio().toFixed(2)}€`);

console.log(`${ei1.getNombre()}: ${ei1.getPrecio().toFixed(2)}€`);
console.log(`${ei2.getNombre()}: ${ei2.getPrecio().toFixed(2)}€`);
console.log(`${ei3.getNombre()}: ${ei3.getPrecio().toFixed(2)}€`);

// Métodos estáticos de Producto
console.log("\nMÉTODOS ESTÁTICOS:");

const todosLosProductos: Producto[] = [
    p1, p2, p3,
    e1, e2, e3,
    ei1, ei2, ei3
];

const promedio = Producto.precioPromedio(todosLosProductos);
const cantidadApple = Producto.contarPorMarca(todosLosProductos, "Apple");

console.log(`Precio promedio: ${promedio.toFixed(2)}€`);
console.log(`Productos de Apple: ${cantidadApple}`);

// Mostrar información de las distintas clases
console.log("\nINFORMACIÓN DE LOS OBJETOS:");

console.log(p1.informacion());
console.log(e1.informacion());
console.log(ei1.informacion());

// Mostrar inventario final
console.log("\nINVENTARIO FINAL:");
inventario.mostrarProductos();

console.log("\nFIN DEL PROGRAMA");